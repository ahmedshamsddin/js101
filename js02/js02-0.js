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

// في الحل  while التأكد من استخدام  

// Test case 1: ia_factorize(12);
// Expected output: [1, 2, 3, 4, 6, 12]

// Test case 2: ia_factorize(20);
// Expected output: [1, 2, 4, 5, 10, 20]

// Test case 3: ia_factorize(100);
// Expected output: [1, 2, 4, 5, 10, 20, 25, 50, 100]

// Test case 4: ia_factorize(1001);
// Expected output: [1, 7, 11, 13, 77, 91, 143, 1001]

// Test case 5: ia_factorize(-1);
// Expected output: []

// Test case 6: ia_factorize(19);
// Expected output: [1, 19]
