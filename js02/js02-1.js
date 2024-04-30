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

console.log(ia_sumOfEvens([ [0, -1, -2], [-6, -4, 9], [-8, 1, 19] ]))   
console.log(ia_sumOfEvens([ [32, 101], [22, 3] ]))


// Test case 1: ia_sumOfEvens([ [0, -1, 2], [6, 4, 9], [8, 1, 19] ]);
// Expected output: 20

// Test case 2: ia_sumOfEvens([ [32, 101], [22, 3] ]);
// Expected output: 54

// Test case 3: ia_sumOfEvens([ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]);
// Expected output: 20

// Test case 4: ia_sumOfEvens([ [1, 3, 5], [7, 9, 11], [13, 15, 17] ]);
// Expected output: 0

// Test case 5: ia_sumOfEvens([ [2, 4, 6], [8, 10, 12], [14, 16, 18] ]);
// Expected output: 90

// Test case 6: ia_sumOfEvens([ [0, -1, -2], [-6, -4, 9], [-8, 1, 19] ]);
// Expected output: -20