function ia_capitalize (sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(ia_capitalize("palestine Will be free"));
console.log(ia_capitalize("ibtikar assembly"));
