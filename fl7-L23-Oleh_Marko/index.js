import { createInterface } from './js/module-interface.js';
import math from './js/module-calculation.js'
import { render } from './js/module-render.js'

createInterface();

let addButton = document.getElementsByClassName('add')[0];
addButton.onclick = function () {
  render(math.add());
}

let subtractButton = document.getElementsByClassName('subtract')[0];
subtractButton.onclick = function () {
  render(math.subtract());
}

let multiplyButton = document.getElementsByClassName('multiply')[0];
multiplyButton.onclick = function () {
  render(math.multiply());
}

let divideButton = document.getElementsByClassName('divide')[0];
divideButton.onclick = function () {
  render(math.divide());
}
