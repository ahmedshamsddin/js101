function ia_numberOfVowels (word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    word.split('').forEach(element => {
        if (vowels.includes(element.toLowerCase())) {
            count++;
        }
    });

    return count;
}

console.log(ia_numberOfVowels('Ibtikar Assembly'));

// في الحل  forEach التأكد من استخدام  

// Test case 1: ia_numberOfVowels('Ibtikar Assembly');
// Expected output: 5

// Test case 2: ia_numberOfVowels('JavaScript');
// Expected output: 3

// Test case 3: ia_numberOfVowels('Ibtikar');
// Expected output: 3

// Test case 4: ia_numberOfVowels('AEIOUaeiou');
// Expected output: 10

// Test case 5: ia_numberOfVowels('palestine will be free');
// Expected output: 8