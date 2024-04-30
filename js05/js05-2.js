const ia_parseJSON = (string) => {
    try {
        return JSON.parse(string);
    } catch (error) {
        return "ERROR";
    }
}

// try-catch تأكد من استخدام 

// Test case 1: ia_parseJSON('{"a": 1}');
// Expected output: { a: 1 }

// Test case 2: ia_parseJSON('{"a": 1');
// Expected output: ERROR

// Test case 3: ia_parseJSON('{"name": "Ahmad", "age": 20}');
// Expected output: { name: "Ahmad", age: 20 }

// Test case 4: ia_parseJSON("ibtikar assembly");
// Expected output: ERROR