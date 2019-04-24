export class Circle {
    static pi = 3.14;

    static calculateArea(radius:number) {
        console.log("area is " + this.pi * radius * radius);
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number { 
        return 2 * Circle.pi * radius;
    }
}

Circle.calculateArea(5); // returns 78.5

let circleObj = new Circle();
circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea(); //<-- cannot call this
