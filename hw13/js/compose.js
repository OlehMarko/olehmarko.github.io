function compose() {
  return Array.prototype.reduceRight.call(arguments, function (lastFu, fu) {
    return function () {
      return fu(lastFu.apply(null, arguments));
    };
  });
}
