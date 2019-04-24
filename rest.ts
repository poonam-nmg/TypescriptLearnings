function multNumbers(...nums:number[]) {  
   var i: number;   
   var mult:number = 1; 
   console.log("Arg passed: ");
   for(i = 0;i<nums.length;i++) {
       console.log(nums[i]); 
      mult = mult * nums[i]; 
   } 
   console.log("mult of the numbers",mult) 
} 
multNumbers(1,2,3) 
multNumbers(10,10,10,10,10);

import {Circle} from "./static"
Circle.calculateArea(5);