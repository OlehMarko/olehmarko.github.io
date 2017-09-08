function add(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) + parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function subtract(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) - parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function multiply(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) * parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}
function divide(){
  let result = parseInt(document.getElementsByName('firstInput')[0].value) / parseInt(document.getElementsByName('secondInput')[0].value);
  return validate(result);
}

function validate(result) {
  if (!isNaN(result)) {
    return result;
  } else {
    return 'Enter nubers';
  }
}

export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
}
