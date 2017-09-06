function decypherPhrase(rules, string) {
  var newRules = {};
    for (var prop in rules) {
      if (rules.hasOwnProperty(prop)) {
        newRules[rules[prop]] = prop;
      }
    }
  return cypherPhrase(newRules, string);
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
console.log(decypherPhrase( charactersMap, 'kiggy dog' ));
