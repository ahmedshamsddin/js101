function ia_factorize (number) {
    let factor = 1;
    const factors = [];
  
    while (factor <= number) {
      if (number % factor === 0) {
        factors.push(factor);
      }
      factor++;
    }
  
    return factors;
}

console.log(ia_factorize(12));
