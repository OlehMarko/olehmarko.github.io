function getClosestToZero() {
  let min;
  for (let i = 0; i < arguments.length; i++) {
    if (Math.abs(arguments[i]) < Math.abs(arguments[i - 1])) {
      min = arguments[i];
    }
  }
  return(min);
}

console.log(getClosestToZero(-3, 2, 34, 1));
