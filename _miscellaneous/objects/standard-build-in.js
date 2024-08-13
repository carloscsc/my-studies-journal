// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

/** Global this */

// work in window and non-window context 

function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());

