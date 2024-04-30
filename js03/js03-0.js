const ia_isObject = (value) => {
    return value !== null && typeof value === 'object' || typeof value === 'function';
}

console.log(ia_isObject({}));
console.log(ia_isObject(function add(x,y) {return x + y}))
console.log(ia_isObject(""))
console.log(ia_isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')))
console.log(ia_isObject(new Date()))
console.log(ia_isObject("12/12/2011"))
console.log(ia_isObject(null))
console.log(ia_isObject([1,2,3]))

// Test case 1: ia_isObject({});
// Expected output: true

// Test case 2: ia_isObject(function add(x,y) {return x + y});
// Expected output: true

// Test case 3: ia_isObject("");
// Expected output: false

// Test case 4: ia_isObject(new RegExp('^[a-zA-Z0-9]+$', 'g'));
// Expected output: true

// Test case 5: ia_isObject(new Date());
// Expected output: true

// Test case 6: ia_isObject("12/12/2011");
// Expected output: false

// Test case 7: ia_isObject(null);
// Expected output: false

// Test case 8: ia_isObject([1,2,3]);
// Expected output: true