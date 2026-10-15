<script lang="ts">
	import formatCount from "./format-count";

	export let repo: string; // user/repo

	let localStorageKey = `github-stars-${repo}`;
	let localStorageDateKey = `github-stars-date-${repo}`;

	let stars = parseInt(localStorage[localStorageKey]);
	let starsDate = new Date(localStorage[localStorageDateKey]);

	$: localStorage[localStorageKey] = stars.toString();
	$: localStorage[localStorageDateKey] = new Date().toISOString();

	if (isNaN(stars)) {
		update();
	} else {
		// https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api#primary-rate-limit-for-unauthenticated-users
		// Invalidate cache after 1 hour
		if (new Date().getTime() - starsDate.getTime() > 1000 * 60 * 60) {
			update();
		}
	}

	function update() {
		fetch("https://api.github.com/repos/" + repo)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((json) => {
				stars = json.stargazers_count;
				console.log("got stars from GitHub", stars);
			})
			.catch((error) => {
				console.error("couldn't fetch from GitHub" + error);
			});
	}
</script>

{#if !isNaN(stars)}
	{formatCount(stars)}
{/if}
