/* Project Euler: Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? */

function numberIsPrime(number) {
  // dont need to go past half way
  const limit = number % 2 === 0 ? number / 2 : (number - 1) / 2;
  let divisorCount = 0;
  for (let i = 1; i < limit; i++) {
    if (number % i === 0) divisorCount++;
    if (divisorCount > 2) return false;
  }
  return true;
}

function largestPrimeFactor(number) {
  let largestPrimeFactor;

  let i = 0;
  while (i <= number) {
    // check if i is a prime
    if (numberIsPrime(i)) {
      // check if it's a factor
      if (number % i === 0) largestPrimeFactor = i;
    }
    i++;
  }

  return largestPrimeFactor;
}

console.log(largestPrimeFactor(13195));
