function numberOrder(num1,num2,num3){
    if(num1<num2&&num2<num3){
        return 'Strict mode'
    }
    else if(num1>=num2&&num2<num3){
        return 'Soft mode'
    }
    else{
        return undefined;
    }
}

console.log(numberOrder(10,15,31));
console.log(numberOrder(22,22,50));
console.log(numberOrder(50,21,15));