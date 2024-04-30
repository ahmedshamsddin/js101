function ia_numberOfVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

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
