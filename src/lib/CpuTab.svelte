<script>
	import PanelButton from './PanelButton.svelte';
	import { cpuPercentage } from './activities.js'
</script>

<h1 class="text-lg font-bold">Engine</h1>
<PanelButton buttonImage="assets/cheerpx.svg" clickUrl="https://cheerpx.io/docs" buttonText="Explore CheerpX">
</PanelButton>
<p><span class="font-bold">Virtual CPU: </span>{$cpuPercentage}%</p>
<p>CheerpX is a x86 virtualization engine in WebAssembly</p>
<p>It can securely run unmodified x86 binaries and libraries in the browser</p>
<p>Excited about our technology? <a class="underline" href="https://cheerpx.io/docs/getting-started" target="_blank">Start building</a> your projects using <a class="underline" href="https://cheerpx.io/" target="_blank">CheerpX</a> today!</p>
