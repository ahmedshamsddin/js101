function ia_sumOfEvens(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 === 0) {
                sum += array[i][j];
            }
        }
    }
  
    return sum;
}

console.log(ia_sumOfEvens([ [0, -1, 2], [6, 4, 9], [8, 1, 19] ]))   
console.log(ia_sumOfEvens([ [32, 101], [22, 3] ]))