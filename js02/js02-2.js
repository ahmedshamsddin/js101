function ia_mirrorArray(array) {
    const mirror = [...array];

    for (let i = array.length - 2; i >= 0; i--) {
        mirror.push(array[i]);
    }

    return mirror;

    // للفضوليين فقط
    // return array.concat(array.slice(0, array.length - 1).reverse());
}

console.log(ia_mirrorArray([1, 2, 3, 4, 5]));
console.log(ia_mirrorArray([1, 3, 5, 7])); 