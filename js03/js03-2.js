const ia_sortByPrice = (tickets) => {
    let res = tickets;
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = 0; j < res.length - i - 1; j++) {
          if (res[j].price > res[j + 1].price) {
            const temp = res[j];
            res[j] = res[j + 1];
            res[j + 1] = temp;
          }
        }
      }
      return res;

    // للفضوليين فقط
    // return tickets.sort((a, b) => a.price - b.price);
};

// Test case 1: ia_sortByPrice([{to: "Ankara", price: 500}, {to: "İstanbul", price: 100}, {to: "İzmir", price: 450}]);
// Expected output: [{to: "İstanbul", price: 100}, {to: "İzmir", price: 450}, {to: "Ankara", price: 500}]

// Test case 2: ia_sortByPrice([{to: "Ankara", price: 500}, {to: "İstanbul", price: 100}]);
// Expected output: [{to: "İstanbul", price: 100}, {to: "Ankara", price: 500}]

// Test case 3: ia_sortByPrice([{to: "Paris", price: 120}, {to: "London", price: 200}, {to: "Berlin", price: 150}]);
// Expected output: [{to: "Paris", price: 120}, {to: "Berlin", price: 150}, {to: "London", price: 200}]