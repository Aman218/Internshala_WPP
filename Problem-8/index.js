function tocheckstr(str){
    str=str.toLowerCase();
    let arr=[];
    for(let i=0;i<=3;i++){
        arr.push(str[i])
    }
    arr=arr.join('');
    if(arr==='java'){
        return true
    }
    else{
        return false;
    }
}
console.log(tocheckstr('Javascript'))