Function.prototype.bindMe = function(context) {

  var args = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;
  var functionExample = function() {};
  var bounder = function() {
    if (this instanceof functionExample) {
      return fToBind.apply(this , args.concat(Array.prototype.slice.call(arguments)));
    } else {
      return fToBind.apply(context , args.concat(Array.prototype.slice.call(arguments)));
    }
  };
  return bounder;
};

module.exports = bindMe;
