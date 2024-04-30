function ia_isPositiveInteger(string) {
    let number = Number(string);
    return number > 0 && number % 1 === 0;
}

// Test case 1: ia_isPositiveInteger("0102e");
// Expected output: false

// Test case 2: ia_isPositiveInteger("f102");
// Expected output: false

// Test case 3: ia_isPositiveInteger("0");
// Expected output: false

// Test case 4: ia_isPositiveInteger("-102");
// Expected output: false

// Test case 5: ia_isPositiveInteger("102");
// Expected output: true

// Test case 6: ia_isPositiveInteger("1.0");
// Expected output: false