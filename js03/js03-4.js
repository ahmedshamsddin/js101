const ia_getFrequencies = (array) => {
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
