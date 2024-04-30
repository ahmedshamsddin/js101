const ia_objectToArray = (object) => {
    return Object.entries(object);
}

console.log(ia_objectToArray({a: new Date(), b: 2, c: 3}));
console.log(ia_objectToArray({name: 'Ahmad', age: 25, city: 'Istanbul'}));
console.log(ia_objectToArray({}));
console.log(ia_objectToArray([]));

// Test case 1: ia_objectToArray({a: 1, b: 2, c: 3});
// Expected output: [['a', 1], ['b', 2], ['c', 3]]

// Test case 2: ia_objectToArray({name: 'Ahmad', age: 25, city: 'Istanbul'});
// Expected output: [['name', 'Ahmad'], ['age', 25], ['city', 'Istanbul']]

// Test case 3: ia_objectToArray({});
// Expected output: []

// Test case 4: ia_objectToArray([]);
// Expected output: []