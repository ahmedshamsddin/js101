const ia_isObjectEmpty = (value) => {
    return Object.keys(value).length === 0 || value === null || value.length === 0;
}

// Test case 1: ia_isObjectEmpty({});
// Expected output: true

// Test case 2: ia_isObjectEmpty({a: 1, b: 2});
// Expected output: false

// Test case 3: ia_isObjectEmpty([]);
// Expected output: true

// Test case 4: ia_isObjectEmpty([1, 2, 3]);
// Expected output: false