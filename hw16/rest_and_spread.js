var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if (val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.
let avg = (...args) => {
  let len = args.length;
  args.reduce((prev, next) => prev + next);
  return args / len;
};

console.log(avg(...args))
