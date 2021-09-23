//tree like data structure - linear
//head -> children
//heap is just an array
//you always know what the smallest number is.
//children at the index of 2N and 2N +1  - does not apply to zero. it starts at 1
//zero is just there but we start at 1
//every node inside a heap must have 2 children
// 7 divided by 2 gives you its parent - floor it. =4
//process - shifting up or down
//the child should be larger and the parent should be smaller
//both children should be larger than their parent
//2 looks at 4 and its children should be bigger

class MinHeap{
    constructor(){
        this.heap = [null];
    }

    insert(val){
        this.heap.push(val);
        this.shiftUp(); //takes the num in the last spot in the array to see if it needs to be shifted.
    }

    shiftUp(){
        if(this.heap.length > 1){
            let currentIndex = this.heap.length - 1;

            while(this.heap[currentIndex] < this.heap[Math.floor(currentIndex/2)] && currentIndex > 1){
            //swap current with its parent
                let parentIndex = Math.floor(currentIndex/2);
                let temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[parentIndex];
                this.heap[parentIndex] = temp;
            //set current to the index it was moved to.
                currentIndex = parentIndex;
            }
        }
    }

    remove(){
        //pop - gives back the smallest value
        if(this.heap.length === 1)
            return null;

        const min = this.heap[1];

        const lastNode = this.heap.pop();

        if(this.heap.length === 1)
            return min;

        this.heap[1] = lastNode;

        this.shiftDown();

        return min;

    }

    shiftDown(){
        let currentIndex = 1;
        
        let leftChildIndex = currentIndex * 2;

        while(leftChildIndex < this.heap.length){
            let rightChildIndex = leftChildIndex + 1;
            let smallerIndex = this.heap[leftChildIndex] < this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;

            if(this.heap[currentIndex] < this.heap[smallerIndex]){
                break;
            }

            let temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[smallerIndex];
            this.heap[smallerIndex] = temp;

            currentIndex = smallerIndex;

            leftChildIndex = currentIndex * 2;
        }
    }

    printMe(){

        const[missMe,...rest] = this.heap;
        console.log(rest);
    }
}

const testHeap = new MinHeap();

testHeap.insert(1);
// testHeap.printMe();
testHeap.insert(5);
// testHeap.printMe();
testHeap.insert(7);
// testHeap.printMe();
testHeap.insert(3);
// testHeap.printMe();
testHeap.insert(-1);
// testHeap.printMe();
testHeap.insert(50);
testHeap.printMe();

testHeap.remove();
testHeap.printMe();
