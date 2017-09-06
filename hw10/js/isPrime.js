function isPrime(number) {
  let isPrimeNumber = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
    }
  }
  return isPrimeNumber;
}

console.log(isPrime(7));
