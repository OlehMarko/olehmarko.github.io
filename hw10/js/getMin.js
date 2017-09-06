function getMin() {
  let min;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < arguments[i - 1]) {
      min = arguments[i];
    }
  }
  return(min);
}
console.log(getMin(6, 5, 3, -1, 0));
