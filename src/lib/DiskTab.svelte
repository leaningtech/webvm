<script>
	import { diskLatency } from './activities.js'
</script>
<h1 class="text-lg font-bold">Disk</h1>
<p><span class="font-bold">Backend latency: </span>{$diskLatency}ms</p>
<p>WebVM runs on top of a complete Linux distribution</p>
<p>Filesystems up to 2GB are supported and data is downloaded completely on-demand</p>
<p>The WebVM cloud backend uses WebSockets and a it's distributed via a global CDN to minimize download latency</p>
