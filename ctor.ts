class Person {
    name: string;
    
    constructor(name: string) {
        console.log(name + " in base");
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.name = "Gill";
        console.log(this.name + " in der");
        this.empCode = empcode;

        console.log(this.empCode + " in der");

    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100