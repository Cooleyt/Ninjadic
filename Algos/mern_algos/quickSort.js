//partition and quicksort

//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return pivi;
}

console.log(partition([7,2,5,47,62,3,4]));

const quickSort = (arr) =>{
    let pivi = partition(arr);
    if (arr.length <= 2) return arr;

    let leftHalf = quickSort(arr.slice(0,pivi));
    let rightHalf = quickSort(arr.slice(pivi + 1));
    return[...leftHalf, arr[pivi], ...rightHalf];

}
console.log(quickSort([7,2,5,47,62,3,4]));

