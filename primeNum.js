function sumPrimes(num) {

  const primeNum = [2, 3];
  
  for (let i = 1; primeNum.length < num; i++) {
    primeNum.push(6 * i - 1);
    primeNum.push(6 * i + 1);
  };
  
  return primeNum
          .filter(prime => prime <= num)
          .reduce((a, b) => a + b, 0);
}

debugger
console.log(sumPrimes(977));