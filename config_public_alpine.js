// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/alpine_20241109.ext2";
// The root filesystem backend type
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = false;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = "/sbin/init";
// Arguments, as an array (Required)
export const args = [];
// Optional extra parameters
export const opts = {
	// User id
	uid: 0,
	// Group id
	gid: 0
};
