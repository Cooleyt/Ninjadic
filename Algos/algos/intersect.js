const intersect = (arrLeft, arrRight) => {
    let lefti = 0;
    let righti = 0;
    let results = [];

    //while lefti hasn't reach length && same for right
    while(lefti < arrLeft.length && righti < arrRight.length){
        //if values are equal
        if(arrLeft[lefti] === arrRight[righti]){
            results.push(arrLeft[lefti]);
            lefti++;
            righti++;
        }
        else if(arrLeft[lefti] < arrRight[righti]){
            lefti++;
        }
        else{
            righti++;
        }
    }
        
        
    return results;
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));