var obj = {};
obj[+process.argv[2] % 2 === 0 ? "even" : "odd"] = evenOrOdd;
obj[+process.argv[3] + +process.argv[2] % 2 === 0 ? "even" : "odd"] = sum;
console.log(obj);
