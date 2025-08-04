if ('trustedTypes' in window) {
  if (window.trustedTypes) {
    window.trustedTypes.createPolicy('default', {
      createHTML: (input) => input,
      createScript: (input) => input,
      createScriptURL: (input) => input
    });
  }
} else {
  console.log("No trustedTypes in window object");
}
