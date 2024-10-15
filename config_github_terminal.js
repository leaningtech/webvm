// The root filesystem location
export const diskImageUrl = IMAGE_URL;
// The root filesystem backend type
export const diskImageType = "github";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = false;
// Executable full path (Required)
export const cmd = CMD;
// Arguments, as an array (Required)
export const args = ARGS;
// Optional extra parameters
export const opts = {
	// Environment variables
	env: ENV;
	// Current working directory
	cwd: CWD;
	// User id
	uid: 1000,
	// Group id
	gid: 1000
};
