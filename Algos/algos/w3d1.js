// reverseString(input) - your input is a string, and the output
// of the function should be that string, but backwards
// this will be a new string, as strings are immutable
// don't use anny built-in functions for reversing a string/array
// in fact, turning the string into an array is unnecessary
// "hello" as your input should return "olleh"
// "Hello!" -> "!elloH"
// "I like cats.." -> "..stac tep ot ekil I"
// "a" -> "a"
// "" -> ""

//one solution

// var x = "hello!";
// function reverseString(input){
//     var newString="";

//     for(var i=input.length-1; i >= 0; i--){
//         newString += input[i];
        
//     }
//     return newString;

// }  

// console.log(reverseString(x));

//second solution

// function reverseString(x) {
//     var newString = ""

//     for (i = x.length - 1; i >= 0; i--) {
//         newString = newString + x[i];
//     }
//     return newString
// }

// console.log (reverseString('Hello!'))

//third solution - not normally used
//slice is a method that works on strings and arrays

// function reverseString(input){
//     var original_input = input;
//     var output="";

//     while(output.length != original_input.length){
//         var x = input[input.length-1];
//         output += x;
//         input = input.slice(0, input.length -1);
//     }
//     return output;
// }
// var x = "hello!";
// console.log(reverseString(x));