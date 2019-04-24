class Greeting { 
   greet():void { 
      console.log("Hello World!!!") 
   } 
} 
var obj1 = new Greeting(); 
obj1.greet();




var arr_names:number[] = new Array(4)  ;

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 ;
   console.log(arr_names[i]); 
}



var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 


interface RunOptions { 
   program:string; 
   commandline:string[]|string|(()=>string); 
} 

//commandline as string 
var options:RunOptions = {program:"test1",commandline:"string"}; 
console.log(options.commandline)  

//commandline as a string array 
options = {program:"test1",commandline:["array","of","strings"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
console.log(options.commandline[2]);  

//commandline as a function expression 
options = {program:"test1",commandline:()=>{return "**function returned**";}}; 

interface Person { 
   age:number ;
} 

interface Musician extends Person { 
   instrument:string ;
} 

var drummer = <Musician>{}
drummer.age = 27 ;
drummer.instrument = "Drums"; 
console.log("Age:  "+drummer.age) ;console.log("Instrument:  "+drummer.instrument);


interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} ;
console.log("value 1: "+this.v1+" value 2: "+this.v2);



class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

var car1 = new Car("Honda");
car1.disp();

console.log("Reading attribute value Engine as :  " + car1.engine);



class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called...") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string...")
   } 
} 

var obj2 = new StringPrinter() 
obj2.doPrint()


class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("The value of num is"+ StaticMem.num) 
   } 
} 

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method



class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson);



interface ILoan { 
   interest:number 
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var oj = new AgriLoan(10,1) 
console.log("Interest is : "+oj.interest+" Rebate is : "+oj.rebate )

var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
//access the object values 
console.log(person.firstname) 
console.log(person.lastname)


var person2 = {
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHello:function() {  }  //Type template 
} 
person2.sayHello = function() {  
   console.log("hello "+person2.firstName)
}  
person2.sayHello()

//Objects as function parameters
var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
var invokeperson = function(obj: { firstname:string, lastname :string }) { 
   console.log("first name :"+obj.firstname) 
   console.log("last name :"+obj.lastname) 
} 
invokeperson(person)
invokeperson({firstname:"Sachin",lastname:"Tendulkar"});


interface IPoint { 
   x:number 
   y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
   var x = p1.x + p2.x 
   var y = p1.y + p2.y 
   return {x:x,y:y} 
} 

//Valid 
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  

