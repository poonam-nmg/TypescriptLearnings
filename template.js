function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
console.log(myNumArr + " \n\n " + myStrArr);
//myNumArr.push("Hi"); // Compiler Error
//myStrArr.push(500); // Compiler Error
