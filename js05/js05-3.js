const ia_safeEval = (string) => {
    try {
        return eval(string);
    } catch (error) {
        return "ERROR";
    }
}

// try-catch تأكد من استخدام 

// Test case 1: ia_safeEval("1 + 2");
// Expected output: 3

// Test case 2: ia_safeEval("1 + 2 +");
// Expected output: ERROR

// Test case 3: ia_safeEval("1 * 2 + 3");
// Expected output: 5