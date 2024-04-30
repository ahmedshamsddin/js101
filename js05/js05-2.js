const ia_parseJSON = (string) => {
    try {
        return JSON.parse(string);
    } catch (error) {
        return "ERROR";
    }
}

console.log(ia_parseJSON('{"a": 1}')); // { a: 1 }
console.log(ia_parseJSON('{"a": 1')); // ERROR
console.log(ia_parseJSON('{"name": "John", "age": 30}')); // ERROR
console.log(ia_parseJSON("ibtikar assembly"));