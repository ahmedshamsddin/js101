const ia_safeArrayAccess = (array, index) => {
    try {
        if (index < 0 || index >= array.length) throw new Error();
        return array[index];
    } catch (error) {
        return "ERROR";
    }
}

console.log(ia_safeArrayAccess([1, 2, 3], 1)); // 2
console.log(ia_safeArrayAccess([1, 2, 3], 3)); // ERROR
console.log(ia_safeArrayAccess([1, 2, 3, 4], 0)); // 1

// try-catch تأكد من استخدام 

// Test case 1: ia_safeArrayAccess([1, 2, 3], 1);
// Expected output: 2

// Test case 2: ia_safeArrayAccess([1, 2, 3], 3);
// Expected output: ERROR

// Test case 3: ia_safeArrayAccess([1, 2, 3, 4], 0);
// Expected output: 1