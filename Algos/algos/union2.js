const union = (arrLeft, arrRight) => {
    let newArr = [];
    let lefti = 0;
    let righti = 0;

    while(lefti < arrLeft.length && righti < arrRight.length){
        if(arrLeft[lefti] === arrRight[righti]){
            newArr.push(arrLeft[lefti]);
            lefti++;
            righti++;
        }
        else if(arrLeft[lefti] > arrRight[righti]){
            newArr.push(arrRight[righti]);
            righti++
        }
        else{
            newArr.push(arrLeft[lefti]);
            lefti++;
        }
    }
    while(lefti < arrLeft.length){
        newArr.push(arrLeft[lefti]);
        lefti++;
    }
    while(righti < arrRight.length){
        newArr.push(arrRight[righti]);
        righti++;
    }
    return newArr;
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));