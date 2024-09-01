function h(z) {
  const error = new Error();
  console.log(error.stack);
}
function g(y) {
  h(y + 1);
}
function f(x) {
  g(x + 1);
}
// f(3);

// const id = setTimeout(f, 1000)
// clearTimeout(id, 500)

