const ia_objectToArray = (object) => {
    return Object.entries(object);
}

console.log(ia_objectToArray({a: new Date(), b: 2, c: 3}));
console.log(ia_objectToArray({name: 'John', age: 25, city: 'New York'}));
console.log(ia_objectToArray({}));
console.log(ia_objectToArray([]));