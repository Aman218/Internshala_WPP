//Problem is to extract the first half of a even string
let str='JavaScript';
let firstHalf=(str)=>{
    let newstr=[]
    let evenL=Math.floor(str.length/2);
    for(let i=0;i<evenL;i++){
        newstr[i]=str[i];
    }
    newstr=newstr.join('');
    return newstr;
}
let res=firstHalf(str);
console.log('The first half of a string is ->',res);
