abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    abstract display(): void;

  //  abstract find(string_a: string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }
   
    display(): void{
        console.log(this.name);
    }
   
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

