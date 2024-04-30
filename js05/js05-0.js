const ia_safeDivide = (a, b) => {
    try {
        if (b === 0) throw new Error();
        return a / b;
    } catch (error) {
        return "ERROR";
    }
}

console.log(ia_safeDivide(10, 2)); // 5
console.log(ia_safeDivide(10, 0)); // ERROR

// try-catch تأكد من استخدام    

// Test case 1: ia_safeDivide(10, 2);
// Expected output: 5

// Test case 2: ia_safeDivide(10, 0);
// Expected output: ERROR

// Test case 3: ia_safeDivide(10, 5);
// Expected output: 2