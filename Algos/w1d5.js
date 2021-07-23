// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);





// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);

// ["a", "b", "c", "d", "e"];



    function reverse(arr) {
        for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        var position = arr.length - i -1;
        arr [i] = arr[position];
        arr[position] = temp;
    }
}

var arr = ["a",2,3,4,"blue",6,7,10];
reverse(arr);
console.log(arr);