function ia_ticketPrice (age, day) {
    let price = 0;

    if (age < 18) {
        price = day >= 6 ? 10 : 8;
    }
    else if (age >= 18 && age < 65) {
        price = day >= 6 ? 15 : 12;
    }
    else {
        price = 10;
    }

    // للفضوليين فقط
    //switch(true) {
    //    case age < 18:
    //        day >= 6 ? price = 10 : price = 8;
    //        break;
    //    case age >= 18 && age < 65:
    //        day >= 6 ? price = 15 : price = 12;
    //        break;
    //    case age >= 65:
    //        price = 10;
    //        break;
    //}

    return price;
}

console.log(ia_ticketPrice(39, 6));

// Test case 1: ia_ticketPrice(15, 6);
// Expected output: 10

// Test case 2: ia_ticketPrice(16, 3);
// Expected output: 8

// Test case 3: ia_ticketPrice(27, 7);
// Expected output: 15

// Test case 4: ia_ticketPrice(39, 4);
// Expected output: 12

// Test case 5: ia_ticketPrice(99, 2);
// Expected output: 10

// Test case 6: ia_ticketPrice(75, 7);
// Expected output: 10