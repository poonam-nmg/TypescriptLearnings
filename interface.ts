interface Knife {    cut();}
interface BottleOpener{    openBottle();}
interface Screwdriver{    turnScrew(); }
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
function use(tool: SwissArmyKnife){    console.log("I can do anything!");       tool.cut();    tool.openBottle();    tool.turnScrew(); } 


class Tool1 implements Knife{
constructor(){}
cut():void
{
console.log("I can cut!");
}
}
class Tool2 implements BottleOpener{
 constructor(){}
 openBottle():void
{
console.log("I can openBottle!");
}
}


class Tool3 implements Screwdriver{
constructor(){}
 turnScrew():void
{
console.log("I can turnScrew!");
}
}

class Tool4 implements Screwdriver,BottleOpener,Knife{
constructor(){}
 turnScrew():void
{
console.log("I can turnScrew!");
}
cut():void
{
console.log("I can cut!");
}
openBottle():void
{
console.log("I can openBottle!");
}

}

 
var k:Tool4 = new Tool4();
k.cut();
k.openBottle();
k.turnScrew();




interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(arg0: number)=>number;
}

class Employee implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
                this.empCode = code;
                this.name = name;
    }

    getSalary(empCode:number):number { 
        return 20000;
    }
}

let emp = new Employee(1, "Steve");