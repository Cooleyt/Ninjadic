// function printMe(){
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
//     console.log(i);

//     var newStr = "inside the function";
//     console.log(newStr);

//     if(newStr.length > 5){
//         let otherStr = "hey it's me";
//     }
//     console.log(otherStr); //wont print bcuz its outside the scope^^^
// }

// printMe();
//
//

// const faveIceCreams = ["pistachio", "mint choc chip", "oreo"];
// faveIceCreams[0] = "lavender";  //this works
// console.log(faveIceCreams);

//
//

// console.log(str); //this is hoisting. var defined at the top of its scope.

// var str = "hey its me";
//
//
// console.log(printMe);

// var printMe = "hey";

// function otherStuff(){
//     console.log(printMe);
// }

// otherStuff();  //this works..hoisting

//
//

// const faveIceCreams = ["pistachio", "oreo", "thin mint"];

// const [second, first, another] = faveIceCreams;

// console.log(another); this works
//
//
// const sundae = {
//     "flavor": "vanilla",
//     "topping": "pecans",
//     "sauce" : "hot fudge",
//     "cherry": true
// }

// const{cherry, sauce} = sundae;

// console.log(sauce);

const printMe = (str) => {
    console.log(str);
}

printMe("hello from outside the function");

const runMe = (anotherFunction) => {
    anotherFunction();
}

runMe(() => console.log("ok now THIS is VERY deep"));