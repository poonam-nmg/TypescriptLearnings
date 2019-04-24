var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee;
}());
var per = new Employee(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100
var emp = new Employee(100, "Bill");
//emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'
