const ia_getFrequencies = (array) => {
    if (array.length === 0) {
        return {};
    }
    let object = {};
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        object[array[i]] = count;
    }
    
    return object;

    // للفضوليين فقط

    // return array.reduce((frequencies, current) => {
    //     frequencies[current] = (frequencies[current] || 0) + 1;
    //     return frequencies;
    // }, {});
}

console.log(ia_getFrequencies([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(ia_getFrequencies([true, false, true, false, false]));
console.log(ia_getFrequencies([]));
// Test case 1: ia_getFrequencies([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
// Expected output: {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}

// Test case 2: ia_getFrequencies([true, false, true, false, false]);
// Expected output: {true: 2, false: 3}

// Test case 3: ia_getFrequencies([1, 2, 3, 4, 5]);
// Expected output: {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}

// Test case 4: ia_getFrequencies([]);
// Expected output: {}