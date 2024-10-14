const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM is a server-less virtual Linux environment running fully client-side  |",
	"| in HTML5/WebAssembly.                                                       |",
	"|                                                                             |",
	"| WebVM is powered by the CheerpX virtualization engine, which enables safe,  |",
	"| sandboxed client-side execution of x86 binaries on any browser.             |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator.                                  |",
	"|                                                                             |",
	"| Your own WebVM with custom images via Dockerfile:                           |",
	"|                                                                             |",
	"| " + underline + "https://leaningtech.com/mini-webvm-your-linux-box-from-dockerfile-via-wasm" + normal +"  |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   Welcome to WebVM. If unsure, try these examples:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # requires networking",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
