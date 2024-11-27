// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any): string {
  return `msg: ${msg}`;
}

console.log(showMessage('Hello World'));
console.log(showMessage(12));
