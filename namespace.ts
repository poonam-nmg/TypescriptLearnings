namespace draw_fning { 
   export interface InterfaceShape { 
      draw_fn(); 
   }
}  

namespace draw_fning { 
   export class CircleShape implements InterfaceShape { 
      public draw_fn() { 
         console.log("CircleShape is draw_fnn"); 
      }  
	}}  
	  
      namespace draw_fning { 
         export class TraingleShape implements InterfaceShape { 
            public draw_fn() { 
               console.log("TraingleShape is draw_fnn"); 
            } 
         } 

         function draw_fnAllShapes(shape:draw_fning.InterfaceShape) { 
            shape.draw_fn(); 
         } 
         draw_fnAllShapes(new draw_fning.CircleShape());
         draw_fnAllShapes(new draw_fning.TraingleShape());
      }

	  
	  namespace mynamespace { 
   export namespace ns_a { 
      export class X { 
         public calculateX(price: number) { 
            return price * 40; 
         } 
      } 
   } 
} 

var y = new mynamespace.ns_a.X(); 
console.log("Final amount is : "+ y.calculateX(500));