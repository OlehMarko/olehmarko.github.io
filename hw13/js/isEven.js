function isEven(number) {
  if (number >= 0) {
    if (number === 1) {
      return false;
    } else if (number === 0) {
      return true;
    } else {
      return isEven(number - 2);
    }
  } else {
    if (number === -1) {
      return false;
    } else if (number === 0) {
      return true;
    } else {
      return isEven(number + 2);
    }
  }
}

module.exports = isEven;
