export const show = () => {
	const overlay = document.getElementById("networkModalOverlay");
	overlay.style.display = "flex";
}
export const hide = () => {
	const overlay = document.getElementById("networkModalOverlay");
	overlay.style.display = "none";
}
export const create = (parent) => {
	const html = `
<div id="networkModalOverlay" style="width:100%;height:100vh;position:absolute;display:flex ;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);z-index:100">
    <div id="networkModal" style="max-width:650px;width:100%;background:white;height:400px;display:flex;flex-direction:column;padding:10px">
        <div class="networkModalHeader">
            <h2>Modal Pop Up Window</h2>
        </div>

        <div class="networkModalContent">
            <p>Modal Content</p>
        </div>

        <div class="networkModalFooter" style="margin-top:auto;">
            <button id="networkModalClose">Close</button>
            <button>Save</button>
        </div>
    </div>
</div>
`;
	const templ = document.createElement("template");
	templ.innerHTML = html;
	parent.prepend(templ.content);
	parent.querySelector("#networkModalClose").onclick = hide;
	parent.querySelector("#networkModalOverlay").onclick = (e) => {
		if (e.target === e.currentTarget)
			hide();
	};
}

