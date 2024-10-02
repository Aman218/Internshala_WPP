//Problem was to count the number of vowels in a string

let str='AmanSingh';//This string has 3 vowels;
function toCount(str){
    str=str.toLowerCase()
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
          count++;
        }
    }
    return count;
}
console.log(`Total number of vowel in given string is -> ${toCount(str)}`);
