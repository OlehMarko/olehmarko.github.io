var fibonacci = (function () {
  var memo = {};
  return function innerFibonacci(number) {
    var result;
    if (number in memo) {
      result = memo[number];
    } else {
      if (number === 0 || number === 1) {
        result = number;
      } else {
        result = innerFibonacci(number - 1) + innerFibonacci(number - 2);
        memo[number] = result;
      }
    }
    return result;
  }
})();
