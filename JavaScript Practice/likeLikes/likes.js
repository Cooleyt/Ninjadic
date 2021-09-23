var count = 9;
var count2 = 12;
var count3 = 9;

// var h4 = document.querySelector("likeNumber");


function Likes(id) {
    var h4 = document.querySelector("#" + id);
    if (id == "likeNumber") {
        count++;
        h4.innerText = count + " Likes";
    }
    else if (id == "likeNumber2") {
        count2++;
        h4.innerText = count2 + " Likes";
    } 
    else if (id == "likeNumber3") {
        count3++;
        h4.innerText = count3 + " Likes";
    }
    
//     element.innerText = count + " Likes";
// 
}


