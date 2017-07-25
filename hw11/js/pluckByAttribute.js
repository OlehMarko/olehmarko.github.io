function pluckByAttribute(arrayOfObjects, label) {
  return getTransformedArray(arrayOfObjects, function(item) {
    return item[label];
  });
}

var presidents = [ { name: 'George', surname: 'Kush' } ,
                   { name: 'Barako', surname: 'Obaame' } ];
console.log(pluckByAttribute( presidents, 'name'));// -> [‘George’, ‘Barako’]
