//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
    let lefti = 0;
    let righti = 0;
    let results = [];

    for(let lefti = 0; lefti < arrLeft.length; lefti++){
        for(righti = 0; righti < arrLeft.length; righti++){
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
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(union([1,2,2,2,7],[2,2,6,6,7]));
// console.log(union([1,5,9],[2,6,10]));