// Some ad-blockers block the plausible script from loading. Check if `plausible`
// is defined before calling it.
export function tryPlausible(msg) {
	if (self.plausible)
		plausible(msg)
}
