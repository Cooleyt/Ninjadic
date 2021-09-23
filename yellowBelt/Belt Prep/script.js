function linuxAlert(){
    alert("This game is supported on Linux");
}

var cart = 0;
var cartElement = document.getElementById("cartNumber");

function addToCart(){
    cart++;

    cartElement.innerText = cart;

}

var mainBanner = document.getElementById("mainBanner");
var isStonepunk = true;

function changeBanner(){
    if(isStonepunk){
        mainBanner.src="images/pixel-ninjas-2.png";
        mainBanner.alt="Pixel Ninjas 2";
    }
    else{
        mainBanner.src="images/pixel-ninjas-2.png";
        mainBanner.alt="Stonepunk";
    }
    isStonepunk= !isStonepunk;
}