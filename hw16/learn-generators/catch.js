function* upper(items) {
  // your code goes here
  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === 'string') {
      yield items[i].toUpperCase();
    } else {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
