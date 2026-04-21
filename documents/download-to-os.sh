#!/bin/bash
# Helper script to download files from WebVM to the OS

download_to_os() {
    if [ -z "$1" ]; then
        echo "Usage: download_to_os <filename>"
        echo "Example: download_to_os myfile.txt"
        return 1
    fi
    
    local filename="$1"
    
    if [ ! -f "$filename" ]; then
        echo "Error: File '$filename' not found"
        return 1
    fi
    
    echo "Downloading $filename to OS..."
    
    # Read file content (base64 for binary safety)
    local content=$(base64 "$filename")
    local mimetype=$(file --mime-type -b "$filename")
    
    # Send to parent OS via JavaScript
    cat << EOF > /tmp/download.html
<!DOCTYPE html>
<html>
<body>
<script>
window.parent.postMessage({
    type: 'WEBVM_FILE_DOWNLOAD',
    data: {
        filename: '$filename',
        content: atob('$content'),
        mimeType: '$mimetype'
    }
}, '*');
document.write('Download sent to OS');
</script>
</body>
</html>
EOF
    
    echo "File sent to OS! Check your downloads."
}

# Make function available
alias dl='download_to_os'

echo "Download helper loaded! Use: dl <filename>"
echo "Example: dl myfile.txt"