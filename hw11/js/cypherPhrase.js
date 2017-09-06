function cypherPhrase(rules, string) {
  var arrayString = string.split('');
  return getTransformedArray(arrayString, function(item) {
    for (var key in rules) {
      if (item === key) {
        return rules[key];
      }
    }
    return item;
  }).join('');
}



var charactersMap = {a: 'o', c: 'd', t: 'g'}
console.log(cypherPhrase( charactersMap, 'kitty cat' ));
