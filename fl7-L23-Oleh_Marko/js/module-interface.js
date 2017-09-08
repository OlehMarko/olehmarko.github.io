export function createInterface() {
  let container = document.getElementsByClassName('container')[0];
  let inputFirst = document.createElement('input');
  inputFirst.setAttribute('type', 'text');
  inputFirst.setAttribute('name', 'firstInput');
  let inputSecond = document.createElement('input');
  inputSecond.setAttribute('type', 'text');
  inputSecond.setAttribute('name', 'secondInput');
  container.appendChild(inputFirst);
  container.appendChild(inputSecond);
  createButton('+', 'add');
  createButton('-', 'subtract');
  createButton('*', 'multiply');
  createButton('/', 'divide');
}

function createButton(sign, operation) {
  let container = document.getElementsByClassName('container')[0];
  let button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', sign);
  button.classList.add(operation);
  container.appendChild(button);
}
