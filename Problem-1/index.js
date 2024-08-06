let week_arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let daytimeObj=new Date();
console.log(`Today's Day is-> ${week_arr[daytimeObj.getDay()]}`);
console.log(`Current Time is -> ${daytimeObj.toLocaleTimeString()}`);