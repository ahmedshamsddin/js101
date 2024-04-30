const ia_safeEval = (string) => {
    try {
        return eval(string);
    } catch (error) {
        return "ERROR";
    }
}

console.log(ia_safeEval("1 + 2")); // 3
console.log(ia_safeEval("1 + 2 +")); // ERROR