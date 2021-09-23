var isHover = false;

function photoHover(element){
    console.log("one hover function");

    if(isHover){
        element.src="images/assets/succulents-1.jpg";
    }
    else{
        element.src="images/assets/succulents-2.jpg"
    }

    isHover = !isHover;

}

function cartAlert(){
    alert("Your Cart is empty!");
}


function hide() {
    var div = document.getElementyById();
    div.style.display = 'none';
}
