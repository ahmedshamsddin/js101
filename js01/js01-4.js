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