let num=15;
if(num%3==0||num%7==0){
    if(num%3==0&&num%7==0){
           console.log('number is a multiple of both 3 and 7')
    }
    else if(num%7==0){
        console.log('number is a multiple of 7');
    }
    else if(num%3==0){
      console.log('number is multiple of 3')
    }
}
else{
    console.log('Number is not multiple of either 3 or 7')
}