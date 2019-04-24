var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj1 = new Greeting();
obj1.greet();
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//commandline as string 
var options = { program: "test1", commandline: "string" };
console.log(options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["array", "of", "strings"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
console.log(options.commandline[2]);
//commandline as a function expression 
options = { program: "test1", commandline: function () { return "**function returned**"; } };
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var car1 = new Car("Honda");
car1.disp();
console.log("Reading attribute value Engine as :  " + car1.engine);
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called...");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string...");
    };
    return StringPrinter;
}(PrinterClass));
var obj2 = new StringPrinter();
obj2.doPrint();
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable 
StaticMem.disp(); // invoke the static method
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
var isPerson = obj instanceof Person;
console.log(" obj is an instance of Person " + isPerson);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var oj = new AgriLoan(10, 1);
console.log("Interest is : " + oj.interest + " Rebate is : " + oj.rebate);
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
//access the object values 
console.log(person.firstname);
console.log(person.lastname);
var person2 = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } //Type template 
};
person2.sayHello = function () {
    console.log("hello " + person2.firstName);
};
person2.sayHello();
//Objects as function parameters
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(person);
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
