var inputs = process.argv.slice(2);
var result = inputs.map((element) => element.slice(0,1))
                      .reduce((prev, cur) => prev + cur,"");
console.log(result);
