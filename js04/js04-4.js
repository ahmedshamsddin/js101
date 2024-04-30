class ia_Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

console.log(ia_Calculator.add(5, 3));
console.log(ia_Calculator.subtract(5, 3));
console.log(ia_Calculator.multiply(5, 3));
console.log(ia_Calculator.divide(6, 2));

// Test case 1: ia_Calculator.add(5, 3);
// Expected output: 8

// Test case 2: ia_Calculator.subtract(5, 3);
// Expected output: 2

// Test case 3: ia_Calculator.multiply(5, 3);
// Expected output: 15

// Test case 4: ia_Calculator.divide(6, 2);
// Expected output: 3