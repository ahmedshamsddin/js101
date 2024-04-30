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

console.log(ia_numberOfVowels('Ibtikar Assembly'));