// 

const ia_sortByPrice = (tickets) => {
    let res = tickets;
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = 0; j < res.length - i - 1; j++) {
          if (res[j].price > res[j + 1].price) {
            // Swap ticket positions if the prices are not sorted
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

console.log(ia_sortByPrice([
	{to: "Ankara", price: 500}, 
	{to: "İstanbul", price: 100},
	{to: "İzmir", price: 450}
]));