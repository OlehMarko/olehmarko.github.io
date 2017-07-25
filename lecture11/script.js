var votes = ["angular","angular","react","react","react","angular","ember","react","vanilla"];
var vote = function(arr){
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return obj;
}

var result = vote(votes);

console.log(result);
