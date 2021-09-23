console.log("hey its me")

var display = document.getElementById("display");
var count = 0;

function count(){
    ++count;
    display.innerText = "Buttons has been clicked" + count + "times";
}


// function countUp(element){
//     ++count;
//     if(count < 10){
//         element.innerText= "Button has been clicked" + count + "times";
//     }
//     else{
//         element.innerText = "That's a lot of times!";
//         element.remove();
//         alert("you clicked a lot of times!")
    
    // console.log("you clicked me");
    // console.log(element);
    // element.innerHTML= "Button has been clicked" + count + "times";


