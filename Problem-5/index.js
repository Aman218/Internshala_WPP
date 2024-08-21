function toRemoveChar(str,pos){
    let newstr=[];
    for(let i=0;i<str.length;i++){
        if(i!=pos){
            newstr[i]=str[i];
        }
    }
    newstr=newstr.join('');
    return newstr;
}
console.log(toRemoveChar("Aman",2));