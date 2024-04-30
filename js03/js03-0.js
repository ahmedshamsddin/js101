const ia_isObject = (value) => {
    return value !== null && typeof value === 'object' || typeof value === 'function';
}

console.log(ia_isObject({}));
console.log(ia_isObject(function add(x,y) {return x + y}))
console.log(ia_isObject(""))
console.log(ia_isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')))
console.log(ia_isObject(new Date()))
console.log(ia_isObject("12/12/2011"))
console.log(ia_isObject(null))
console.log(ia_isObject([1,2,3]))
console.log(ia_isObject({}))