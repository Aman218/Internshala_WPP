let num1=98,num2=236;
function toCheckClosest(num1,num2){
    if(num1>100&&num2>100){
          if(num1<num2){
              return num1;
          }
          else{
              return num2;
          }
     }
     else if(num1<100&&num2<100){
         if(num1>num2){
             return num1;
         }
         else{
             return num2
         }
     }
     else if(num1<100&&num2>100){
         let distance1=100-num1;
         let distance2=num2-100;
         if(distance1>distance2){
             return num2;
         }
         else{
             return num1;
         }
     }
     else{
         let distance1=num1-100;
         let distance2=100-num2;
         if(distance1<distance2){
             return num1;
         }
         else{
             return num2;
         }
     }
     
       
}
console.log(toCheckClosest(num1,num2))
