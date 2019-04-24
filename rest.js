"use strict";
exports.__esModule = true;
function multNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var mult = 1;
    console.log("Arg passed: ");
    for (i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        mult = mult * nums[i];
    }
    console.log("mult of the numbers", mult);
}
multNumbers(1, 2, 3);
multNumbers(10, 10, 10, 10, 10);
var static_1 = require("./static");
static_1.Circle.calculateArea(5);
