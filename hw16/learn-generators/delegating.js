function* flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      yield arr[i];
    } else {
      yield * flat(arr[i]);
    }
  }

}
var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
  console.log(f);
}
