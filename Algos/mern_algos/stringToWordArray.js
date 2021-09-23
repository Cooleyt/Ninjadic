//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
// const stringToWordArray = (str) => {
//     arr = []
//     word = ""
//     for(let i = 0; i <str.length; ++i){
//         if(str[i] !== " "){
//             word += str[i];
//         }
//         if(str[i] === " " && str[i+1] !== " "){
//             arr.push(word);
//             word = "";
//         }
//     }
//     if(word !== "")
//     arr.push(word);
//     return arr;
// }

// console.log(stringToWordArray("Did I shine my shoes today?      "));
// console.log(stringToWordArray("two             words"));

// write a function that, given a string of words backwords(with spaces)
const backwardsOrder = (str) => {
    let str2=""
    for(let i = str.length -1; i >= 0; --i){
        str2 += str[i]

    }
    return str2;
}

console.log(backwardsOrder("Make me be backwards"));
console.log(backwardsOrder("radar mom & dad"));



// const reverseWordOrder = (str) => {
//     arr = []
//     word = ""
//     for(let i = 0; i<str.length;i++){
//         if (str[i] !== " "){
//             word += str[i];
//         }
//         if (str[i] === " " && str[i+1] !== " "){
//             // word += '"'
//             arr.push(word);
//             word = "";
//         }

//     }
//     if (word.length > 0){
//         arr.push(word);
//         word = ""
//     }

//     for (let i = arr.length - 1; i >=0; i--){
//         word += arr[i];
//         word += " ";
//     }
    
//     return word;
// }

// console.log(reverseWordOrder("This is a test"));
// console.log(reverseWordOrder("A man a plan a canal Panama"));