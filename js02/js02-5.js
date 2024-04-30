function ia_numberInString (array) {
    return array.filter((word) => {
        return /\d/.test(word); 
    });
}

// Test case 1: ia_numberInString(["1a", "a", "2b", "b"]);
// Expected output: ["1a", "2b"]

// Test case 2: ia_numberInString(["1bt1kar", "ass3mbly"]);
// Expected output: ["1bt1kar", "ass3mbly"]

// Test case 3: ia_numberInString(["ibtikar", "assembly"]);
// Expected output: []