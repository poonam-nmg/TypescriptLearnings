var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var isDone = false;
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(2)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//x[3] = "world"; // error,no x[3rd]
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {})); //starts from 0
var c = Color.Green;
var colorName = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
console.log(Color[3]);
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false; // okay, definitely a boolean
console.log(notSure);
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//create({ prop: 0 }); // OK
//create(null); // OK
//create(42); // Error
//type cast - type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log(someValue + ": " + strLength);
var someValue1 = "this is a new string";
var strLength1 = someValue1.length;
console.log(someValue1 + strLength1);
function fn() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = fn();
console.log(g()); // returns '11'
//var declarations are accessible anywhere within their containing function, module, namespace, or global scope
// One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times
//so let was introduced
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
        var x = 1;
    }
    return x;
}
console.log(f(true)); // returns '10'
console.log(f(false)); // returns 'undefined'
function f3(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f3(false, 12)); // returns '12'
console.log(f3(true, 23)); // returns '100'
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            console.log(city_1);
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error TS2588: Cannot assign to 'kitty' because it is a constant.
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
_a = [second, first], first = _a[0], second = _a[1];
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first2 = [21, 22, 23, 24][0];
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
console.log(first2); // outputs 1
console.log(second2);
console.log(fourth);
console.log("object destructuring");
var o = {
    a1: "foo",
    b1: 12,
    c1: "bar"
};
//let { a1, b1 } = o; //ok
var a1 = o.a1, passthrough = __rest(o, ["a1"]);
var total = passthrough.b1 + passthrough.c1.length;
console.log(total);
