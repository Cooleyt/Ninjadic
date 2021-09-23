//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    const contains = (checkStr, findChar) => {
        for(let i = 0; i < checkStr.length; ++i){
            if(checkStr[i] === findChar){
                return true;
            }
        }
        return false;
    }
    
    let newStr = "";
    for(let i = str.length - 1; i >= 0; --i){
        if(!contains(newStr, str[i])){
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}
console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));

// const dedupe = (str) => {
//     var arr = [];
//     var output = "";
//     count = 0;
//     for(var i = str.length - 1; i >= 0; --i){
//         for(var j = 0; j < arr.length; ++j){
//             if(str[i] === arr [j]){
//                 ++count
//             }
//         }
//         if (count === 0){
//             arr.push(str[i]);
//             output = str[i] + output;
//         }
//         count = 0;
//     }
//     return output;
// }