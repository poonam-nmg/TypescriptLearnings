let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


let isDone: boolean = false;

let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substr(2)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//x[3] = "world"; // error,no x[3rd]



enum Color {Red, Green=2, Blue=4}  //starts from 0
let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
console.log(Color[3]); 


let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false; // okay, definitely a boolean
console.log(notSure); 



// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

declare function create(o: object | null): void;
//create({ prop: 0 }); // OK
//create(null); // OK
//create(42); // Error

//type cast - type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(someValue + ": "+strLength);

let someValue1: any = "this is a new string";
let strLength1: number = (someValue1 as string).length;
console.log(someValue1 + strLength1);






function fn() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = fn();
console.log(g()); // returns '11'




//var declarations are accessible anywhere within their containing function, module, namespace, or global scope
// One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times
//so let was introduced
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
		var x = 1;
    }

    return x;
}

console.log(f(true));  // returns '10'
console.log(f(false)); // returns 'undefined'




function f3(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log(f3(false, 12)); // returns '12'
console.log(f3(true, 23));  // returns '100'


function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
		console.log(city);
            return city;
        }
    }

    return getCity();
}

console.log(theCityThatAlwaysSleeps());




const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

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


let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

[first, second] = [second, first];

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first2] = [21, 22, 23, 24];
let [, second2, , fourth] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(second2); 
console.log(fourth); 



console.log("object destructuring");
let o = {
    a1: "foo",
    b1: 12,
    c1: "bar"
};
//let { a1, b1 } = o; //ok
let { a1, ...passthrough } = o;
let total = passthrough.b1 + passthrough.c1.length;

console.log(total);




let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
//Now search is { food: "rich", price: "$$", ambiance: "noisy" }. 


let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];  //0,1,2,3,4,5