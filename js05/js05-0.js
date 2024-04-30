const ia_safeDivide = (a, b) => {
    try {
        if (b === 0) throw new Error();
        return a / b;
    } catch (error) {
        return "ERROR";
    }
}

console.log(ia_safeDivide(10, 2)); // 5
console.log(ia_safeDivide(10, 0)); // ERROR