function ia_sumOfPositive(array) {
    return array.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
}

console.log(ia_sumOfPositive([-1, -2, -3, -4, -5]));
console.log(ia_sumOfPositive([1, -4, 12, 0, -3, 29, -150]))