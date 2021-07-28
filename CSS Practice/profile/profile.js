var count = 2;

function Likes(id) {
    var h4 = document.querySelector("#" + id);
    if (id == "likeNumber") {
        count++;
        h4.innerText = count;
    }
    
}

var count = 50;

function Likes(id) {
    var h4 = document.querySelector("#" + id);
    if (id == "addNumber") {
        count++;
        h4.innerText = count;
    } 
    
}


function hide() {
    var div = document.getElementyById();
    div.style.display = 'none';
}


var nameSpan = document.querySelector("#name");

function setName(element){
    nameSpan.innerText = "Tova Arial"
    console.log(element.value);

}