function* range(from, to) {
  // your code goes here
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

for (var r of range(5, 10)) {
  console.log(r);
}
