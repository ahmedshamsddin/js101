function ia_mirrorArray(array) {
    if (array.length === 0) {
        return [];
    }

    if (array.length === 1) {
        return array;
    }

    const mirror = [...array];

    for (let i = array.length - 2; i >= 0; i--) {
        mirror.push(array[i]);
    }

    return mirror;

    // للفضوليين فقط
    // return array.concat(array.slice(0, array.length - 1).reverse());
}

console.log(ia_mirrorArray([]));
console.log(ia_mirrorArray([1, 3, 5, 7])); 

// Test case 1: ia_mirrorArray([1, 2, 3, 4, 5]);
// Expected output: [1, 2, 3, 4, 5, 4, 3, 2, 1]

// Test case 2: ia_mirrorArray([1, 3, 5, 7]);
// Expected output: [1, 3, 5, 7, 5, 3, 1]

// Test case 3: ia_mirrorArray([]);
// Expected output: []

// Test case 4: ia_mirrorArray([1]);
// Expected output: [1]