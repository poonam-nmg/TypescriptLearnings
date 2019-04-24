"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        console.log("area is " + this.pi * radius * radius);
        return this.pi * radius * radius;
    };
    Circle.prototype.calculateCircumference = function (radius) {
        return 2 * Circle.pi * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
exports.Circle = Circle;
Circle.calculateArea(5); // returns 78.5
var circleObj = new Circle();
circleObj.calculateCircumference(5); // returns 31.4000000
//circleObj.calculateArea(); //<-- cannot call this
