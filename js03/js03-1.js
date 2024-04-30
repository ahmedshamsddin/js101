const ia_isObjectEmpty = (value) => {
    return Object.keys(value).length === 0 || value === null || value.length === 0;
}

console.log(ia_isObjectEmpty({}));
console.log(ia_isObjectEmpty({a: 1, b: 2}));
console.log(ia_isObjectEmpty([]));
console.log(ia_isObjectEmpty([1, 2, 3]));