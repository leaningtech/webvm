<script lang="ts">
	import formatCount from "./format-count";

	export let guildId = "988743885121548329";

	let localStorageKey = `discord-prescence-${guildId}`;
	let localStorageDateKey = `discord-prescence-date-${guildId}`;

	let presenceCount = parseInt(localStorage[localStorageKey]);
	let presenceDate = new Date(localStorage[localStorageDateKey]);

	$: localStorage[localStorageKey] = presenceCount.toString();
	$: localStorage[localStorageDateKey] = new Date().toISOString();

	if (isNaN(presenceCount)) {
		update();
	} else {
		// Invalidate cache after 15 minutes
		if (new Date().getTime() - presenceDate.getTime() > 1000 * 60 * 15) {
			update();
		}
	}

	interface DiscordWidgetData {
		presence_count: number;
	}

	function update() {
		fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
			.then((response) => {
				if (response.ok) {
					return response.json() as Promise<DiscordWidgetData>;
				}
				throw new Error(response.statusText);
			})
			.then((json) => {
				presenceCount = json.presence_count;
				console.log("got presence count from Discord", presenceCount);
			})
			.catch((error) => {
				console.error("couldn't fetch from Discord" + error);
			});
	}
</script>

{#if !isNaN(presenceCount)}
	{formatCount(presenceCount)}
{/if}
