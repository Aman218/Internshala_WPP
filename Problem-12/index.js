function toReverse(str){
    str=str.split('');
    let s=0;
    let e=str.length-1;
    while(s<=e){
        let temp;
        temp=str[s];
        str[s]=str[e];
        str[e]=temp;
        s++;
        e--;
    }
    str=str.join('');
    return str;
}
let res=toReverse('Kangana');
console.log(res)
