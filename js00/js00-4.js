function ia_oddOrEven(n) {
    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(ia_oddOrEven(1));

// Test case 1: ia_oddOrEven(101);
// Expected output: Odd

// Test case 2: ia_oddOrEven(222);
// Expected output: Even

// Test case 3: ia_oddOrEven(-321);
// Expected output: Odd