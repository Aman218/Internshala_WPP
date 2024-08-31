let str='Kangana';
let j=3;
let arr=[];
let i=str.length-1;
while(j>=1){
    arr.push(str[i]);
    i--;
    j--;
}
arr=arr.reverse();
arr=arr.join('')
// console.log(arr);
let res=arr+str+arr;
console.log(res)
