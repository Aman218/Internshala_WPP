function togetstringinLowercase(str){
    //Returning a string in uppercase only if the length is less than 3
    if(str.length<3){
        str=str.toUpperCase();
        return str;
    }
let newstr=str.slice(0,3)
// console.log(newstr);
newstr=newstr.toLowerCase();
return newstr;
}
console.log(togetstringinLowercase("AMANSingh"));
console.log(togetstringinLowercase("AMA"));
console.log(togetstringinLowercase("am"));

