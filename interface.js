function use(tool) { console.log("I can do anything!"); tool.cut(); tool.openBottle(); tool.turnScrew(); }
var Tool1 = /** @class */ (function () {
    function Tool1() {
    }
    Tool1.prototype.cut = function () {
        console.log("I can cut!");
    };
    return Tool1;
}());
var Tool2 = /** @class */ (function () {
    function Tool2() {
    }
    Tool2.prototype.openBottle = function () {
        console.log("I can openBottle!");
    };
    return Tool2;
}());
var Tool3 = /** @class */ (function () {
    function Tool3() {
    }
    Tool3.prototype.turnScrew = function () {
        console.log("I can turnScrew!");
    };
    return Tool3;
}());
var Tool4 = /** @class */ (function () {
    function Tool4() {
    }
    Tool4.prototype.turnScrew = function () {
        console.log("I can turnScrew!");
    };
    Tool4.prototype.cut = function () {
        console.log("I can cut!");
    };
    Tool4.prototype.openBottle = function () {
        console.log("I can openBottle!");
    };
    return Tool4;
}());
var k = new Tool4();
k.cut();
k.openBottle();
k.turnScrew();
var Employee = /** @class */ (function () {
    function Employee(_a) {
        var code = _a.code, name = _a.name;
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
var emp = new Employee({ code: 1, name: "Steve" });
