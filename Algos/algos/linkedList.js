// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var x = new ListNode(7);

// var y = new ListNode(17);
// x.next = y;

// var z = new ListNode(3);
// y.next = z;

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }
    // addToBack - adds a node with the given value to the tail of the list
    // addToBack(value) {
        
    //     var newNode = new ListNode(value);

    //     if (this.head == null && this.tail == null) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }

    //     else {
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //     }
    // }
    // // contains - returns true if target is in the linked list (as a node value),
    // // false otherwise
    // contains(target) {
    //     var runner = this.head;

    //     while (runner != null) {

    //         if (runner.value == target) {
    //             return true;
    //         }
    //         runner = runner.next;
    //     }

    //     return false;
    // }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {
        var runner = this.head;
        var output = '';

        while (runner != null) {
            if (runner == this.tail) {
                output += runner.value;
            }
            else {
                output += runner.value + ' - ';
            }
            runner = runner.next;
        }

        return output;
    }
}

findMinNode() {
    var runner = this.head;
    var minNode = this.head;
    while(runner != null){
        if (runner.value < minNode.value){
            minNode = runner
        }
        runner = runner.next
    }
    return minNode
    
}
​
// findMaxNode() - find the node in the linked list with the highest value
// and return that node - the node itself, not its value
// if you find two or more nodes tied for that value,
// return the first one you find
findMaxNode() {
    var runner = this.head;
    var maxNode = this.head;
    while(runner != null){
        if (runner.value > maxNode.value){
            maxNode = runner
        }
        runner = runner.next
    }
    return maxNode
    
}

​
// secondToLast() - return the value of the second-to-last node in
// the linked list
// what should you do if the list has less than two nodes?
secondToLast() {
    var runner = this.head;
    while(runner != null){
        if(runner.next == this.tail){
            return runner
        }
        runner = runner.next
    }
}
}

var newSLL = new SinglyLinkedList();

newSLL.addToBack(27);
newSLL.addToFront(8);
newSLL.addToFront(4);
newSLL.addToFront(13);
newSLL.addToFront(7);
newSLL.addToFront(3);
newSLL.addToBack(14);

console.log(newSLL.display());
// console.log(newSLL.contains(13));
// console.log(newSLL.contains(99));
// console.log(newSLL.findMinNode());
// console.log(newSLL.findMaxNode());
console.log(newSLL.secondToLast());


