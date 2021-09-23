class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
        // this.length = 0; use this method when you have a very long list
        }
    }
    push(value) {
        var new_node = new ListNode(value);
        if(this.head == null && this.tail == null){
            this.head = new_node;
            this.tail = new_node;
        }else{
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    pop() {
        if(this.head == null){
            return false
        }
        if(this.head == this.tail){
            var temp = this.head;
            this.head = this.head.next; 
            this.tail = this.head;
        }else{
            var temp = this.head;
            this.head = this.head.next; 
        }
        return temp.value;
    }
    top() {
        if(this.head == null){
            return false
        }
        return this.head.value;
    }
    contains(target) {
        var runner = this.head;
        while(runner != null){
            if(runner.value == target){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    isEmpty() {
        if(this.head == null && this.tail == null){
            return true;
        }
        return false;
    }
    size() {
        var runner = this.head;
        var count = 0;
        while(runner != null){
            ++count;
            runner = runner.next;
        }
        return count;
        }
        

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

    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

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
    removeFront() {
        var newNode = this.head
        this.head = this.head.next
        newNode.next = null
        return newNode.value

    }
     // removeFront() - remove the head of the linked list and
    // return that node's value - not the node itself
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?

    removeBack() {
        var runner = this.head
        while (runner.next != this.tail){
            runner = runner.next
        }
        this.tail = runner
        var oldTail = runner.next
        runner.next = null
        return oldTail.value
    }
}

    // function generateNewList(length, min_value, max_value) {
    //     var newSLL = new SinglyLinkedList();
    //     for (var i = 0 ; i < length; i++){
    //         newSLL.addToBack
    //     }
    //     return newSLL;


  // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

isPalindrome() {
    if(this.head.value == this.tail.value){
        return false;
    }
    var new_SLL = new SLLStack()
    new_SLL.push(this.head);
    runner = this.head
    while(runner != null){
        new_SLL
    }

}
var newSLL = new SinglyLinkedList();

    newSLL.addToFront(8);
    newSLL.addToFront(4);
    newSLL.addToFront(13);
    newSLL.addToFront(7);
    newSLL.addToFront(3);

    console.log(newSLL.contains(13));
    console.log(newSLL.contains(99));
    console.log(newSLL.removeFront);
    console.log(newSLL.display());
    console.log(newSLL.removeBack());
    console.log(newSLL.display());


// bonus: making these linked lists to test is kind of tedious. what if...
// what if... we had a function (not a method of the SLL class) to make them
// for us?
// generateNewList(length, min_value, max_value) -> creates a new SLL of the
// given length, with nodes containing values from min_value up to max_value
// some random integers may be helpful here


//notes
//removing the tail and making the next node the tail.
//set up a running starting at the head and move down the linked list until the runner is the tail
//set it equal to the new tail. return the value not the node itself. 
//console.log(newSLL.display());  returns 5-4-3-2-1
//newSLL.removeFront(); removes the tail (5)
//console.log(newSLL.display()); //should return 4-3-2-1

//removeFront(){}
//if(this.head == null && this.tail == null){
//   return undefined;
// } 
//}

//removeBack(){}
//if(this.head == null && this.tail == null){
//   return undefined;
// } 
//}
