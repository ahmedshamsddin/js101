function ia_numberInString (array) {
    return array.filter((word) => {
        // check string contains number
        return /\d/.test(word); 
    });
}

console.log(ia_numberInString(["hello", "ibtikar", "123", "assembly"]));
console.log(ia_numberInString(["1a", "a", "2b", "b"]));
console.log(ia_numberInString(["1bt1kar", "ass3mbly"]));
console.log(ia_numberInString(["ibtikar", "assembly"]));