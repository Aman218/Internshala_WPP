//Sum of array elements

let arr=[1,2,4,5,5];
function toFindSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let res=toFindSum(arr)
console.log("Sum of Elements in the array is->",res);