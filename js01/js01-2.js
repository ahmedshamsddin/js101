function ia_isPositiveInteger(string) {
    let number = Number(string);
    return number > 0 && number % 1 === 0;
}

console.log(isPositiveInteger("0102e"));