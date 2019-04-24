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
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " in base");
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.name = "Gill";
        console.log(_this.name + " in der");
        _this.empCode = empcode;
        console.log(_this.empCode + " in der");
        return _this;
    }
    Employee.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee;
}(Person));
var emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100
