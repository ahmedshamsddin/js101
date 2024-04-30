function ia_capitalize (sentence) {
    if (sentence === '') {
        return '';
    }
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(ia_capitalize("palestine Will be free"));
console.log(ia_capitalize("ibtikar assembly"));

// في الحل  map التأكد من استخدام  

// Test case 1: ia_capitalize("palestine Will be free");
// Expected output: "Palestine Will Be Free"

// Test case 2: ia_capitalize("ibtikar assembly");
// Expected output: "Ibtikar Assembly";

// Test case 3: ia_capitalize("");
// Expected output: ""