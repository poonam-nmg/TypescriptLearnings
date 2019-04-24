function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK


console.log(myNumArr + " \n\n " + myStrArr);
//myNumArr.push("Hi"); // Compiler Error
//myStrArr.push(500); // Compiler Error

let myNumArr1 = getArray([100, 200, 300]); // OK - Calling Generic Function without Specifying the Type
let myStrArr1 = getArray(["Hello", "World"]); // OK - Calling Generic Function without Specifying the Type


function displayType_2<T, U>(id:T, name:U): void { 

    id.toString(); // OK
    name.toString(); // OK  - generic for all types

 //   id.toFixed();  // Compiler Error: 'toFixed' does not exists on type 'T'
   // name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType_2<number, string>(1, "Steve"); // number, string


  function displayType_1<T>(id:T, name:string): void { 
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType_1<number>(1, "Steve"); // number, string



  function displayNames<T>(names:T[]): void { 
    console.log(names.join(", "));  
}

displayNames<string>(["Steve", "Bill"]); // Steve, Bill









class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

//display("Bill Gates");//Compiler Error