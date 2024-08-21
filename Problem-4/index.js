let todaysDate=new Date();
let year=todaysDate.getFullYear();
let christmasDate=new Date(year,11,25);
// console.log(christmasDate);
if(todaysDate>christmasDate){
    year=todaysDate.setFullYear(year+1);
}
let timeDifference=christmasDate-todaysDate;

//this timeDifference is in millisecond so we'll have to convert it to days;
// 1day= 24*60*60*1000 millisecond
// therefore 1millisecond= 1/24*60*60*1000;
 
let noOfdaysleft= Math.floor(timeDifference/(24*60*60*1000));
console.log(`No of days left for Christmas is-->${noOfdaysleft}`);

