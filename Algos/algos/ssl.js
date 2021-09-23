class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
        // this.length = 0; use this method when you have a very long list
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
}
// make sure you test all six methods!
// make sure that you test any edge cases you find

var x = new SLLStack();
x.push(1)
x.push(2)
x.push(3)
x.push(2)
x.push(1)
// console.log(x.display())
console.log(x.pop())
// console.log(x.display())
console.log(x.top())
console.log(x.contains(3))
console.log(x.contains(19))
console.log(x.isEmpty())
console.log(x.size())