function getTransformedArray(arr, fn) {
  let transformedArray = [];
  forEach(arr, function(el) {
    transformedArray.push(fn(el));
  });
  return transformedArray;
}

function increment(num){ return num + 1 }
console.log(getTransformedArray( [1, 7, 20], increment ));
