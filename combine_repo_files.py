"""
This script downloads and processes files from a specified GitHub repository.
The files can either be combined into a single output file or split into individual files
in a specified output directory. It supports excluding certain file types and
directories from processing and includes configurable logging for better traceability.

Usage:
    python script.py <repo_url> <output_dir> [--branch_or_tag <branch_or_tag>] [--split] [--log_level <log_level>]

Parameters:
    repo_url (str): The URL of the GitHub repository.
    output_dir (str): Local directory to save the parsed files.
    --branch_or_tag (str): The branch or tag of the repository to download. Default is "master".
    --split: If specified, split files into separate directories instead of combining them.
    --log_level (str): Set the logging level (e.g., DEBUG, INFO, WARNING, ERROR, CRITICAL). Default is "INFO".

Examples:
    python script.py https://github.com/example/repo output_dir --split --log_level DEBUG
"""

import os
import requests
import zipfile
import io
import argparse
import logging
from typing import List


def configure_logging(level: str) -> None:
    """
    Configures logging based on the specified log level.

    Args:
        level (str): The logging level as a string (e.g., "DEBUG", "INFO").

    Raises:
        ValueError: If the provided log level is not valid.
    """
    numeric_level = getattr(logging, level.upper(), None)
    if not isinstance(numeric_level, int):
        raise ValueError(f"Invalid log level: {level}")
    logging.basicConfig(
        level=numeric_level, format="%(asctime)s - %(levelname)s - %(message)s"
    )


def get_excluded_files() -> List[str]:
    """
    Returns a list of filenames and extensions to be excluded from processing.

    Returns:
        List[str]: A list of filenames and file extensions to be excluded.
    """
    return [
        "README.md",
        "README",
        "LICENSE",
        "LICENSE.txt",
        ".exe",
        ".rtf",
        ".msi",
        ".png",
        ".wav",
        ".jpg",
        ".jpeg",
        ".gif",
        ".bmp",
        ".mp4",
        ".mp3",
        ".zip",
        ".tar",
        ".gz",
    ]


def is_excluded_file(file_path: str, excluded_files: List[str]) -> bool:
    """
    Determines whether a file should be excluded based on its filename or extension.

    Args:
        file_path (str): The path of the file to check.
        excluded_files (List[str]): The list of filenames and extensions to exclude.

    Returns:
        bool: True if the file should be excluded, False otherwise.
    """
    return any(
        file_path.endswith(ex_file) for ex_file in excluded_files
    ) or os.path.basename(file_path).startswith(".")


def has_sufficient_content(file_content: str, min_line_count: int = 10) -> bool:
    """
    Checks if the file content has at least a minimum number of non-empty lines.

    Args:
        file_content (str): The content of the file as a string.
        min_line_count (int, optional): The minimum number of non-empty lines required. Default is 10.

    Returns:
        bool: True if the file content meets the minimum line count, False otherwise.
    """
    lines = [line for line in file_content.split("\n") if line.strip()]
    return len(lines) >= min_line_count


def create_directory(path: str) -> None:
    """
    Creates a directory if it does not already exist.

    Args:
        path (str): The path of the directory to create.
    """
    if not os.path.exists(path):
        os.makedirs(path)
        logging.info(f"Created directory {path}")


def download_and_process_files(
    repo_url: str, output_dir: str, split_files: bool, branch_or_tag: str = "master"
) -> None:
    """
    Downloads and processes files from a GitHub repository archive.

    Args:
        repo_url (str): The URL of the GitHub repository.
        output_dir (str): Local directory to save the parsed files.
        split_files (bool): Whether to split files into separate directories.
        branch_or_tag (str, optional): The branch or tag of the repository to download. Default is "master".
    """
    excluded_files = get_excluded_files()
    download_url = f"{repo_url}/archive/refs/heads/{branch_or_tag}.zip"

    try:
        response = requests.get(download_url)
        response.raise_for_status()

        with zipfile.ZipFile(io.BytesIO(response.content)) as zip_file:
            combined_file_path = os.path.join(output_dir, "combined_output.txt")
            combined_output = (
                open(combined_file_path, "w", encoding="utf-8")
                if not split_files
                else None
            )

            for file_path in zip_file.namelist():
                if file_path.endswith("/") or is_excluded_file(
                    file_path, excluded_files
                ):
                    continue

                try:
                    with zip_file.open(file_path) as file:
                        file_content = file.read().decode("utf-8")
                        if has_sufficient_content(file_content):
                            if split_files:
                                sanitized_path = file_path.replace("/", "_")
                                full_file_path = os.path.join(
                                    output_dir, sanitized_path
                                )
                                create_directory(os.path.dirname(full_file_path))

                                with open(
                                    full_file_path, "w", encoding="utf-8"
                                ) as outfile:
                                    outfile.write(file_content)
                                    logging.info(f"Saved file to {full_file_path}")
                            else:
                                combined_output.write(
                                    f"# File: {file_path}\n{file_content}\n\n"
                                )
                except UnicodeDecodeError as e:
                    logging.error(
                        f"Failed to decode {file_path} due to encoding issue: {e}"
                    )

            if combined_output:
                combined_output.close()
                logging.info(f"Combined source code saved to {combined_file_path}")

    except requests.exceptions.HTTPError as e:
        logging.error(f"HTTP Error occurred: {e}")
    except requests.exceptions.RequestException as e:
        logging.error(f"Error downloading the file: {e}")
    except zipfile.BadZipFile:
        logging.error(
            "Error processing zip file: The downloaded file was not a valid zip file."
        )
    except Exception as e:
        logging.error(f"An unexpected error occurred: {e}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Download and process files from a GitHub repository."
    )
    parser.add_argument("repo_url", type=str, help="The URL of the GitHub repository")
    parser.add_argument(
        "output_dir", type=str, help="Local directory to save the parsed files"
    )
    parser.add_argument(
        "--branch_or_tag",
        type=str,
        help="The branch or tag of the repository to download",
        default="master",
    )
    parser.add_argument(
        "--split",
        action="store_true",
        help="Split files into separate directories instead of combining them",
    )
    parser.add_argument(
        "--log_level",
        type=str,
        default="INFO",
        help="Set the logging level (e.g., DEBUG, INFO, WARNING, ERROR, CRITICAL)",
    )
    args = parser.parse_args()

    configure_logging(args.log_level)

    create_directory(args.output_dir)

    download_and_process_files(
        args.repo_url, args.output_dir, args.split, args.branch_or_tag
    )
