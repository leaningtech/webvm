<script>
import WebVM from '$lib/WebVM.svelte';
import * as configObj from '/config_public_alpine'
function handleProcessCreated(processCount)
{
	// Log only the first process, as a proxy for successful startup
	if(processCount == 1)
	{
		plausible("Alpine init");
	}
}
</script>

<WebVM configObj={configObj} processCallback={handleProcessCreated} cacheId="blocks_alpine" />
