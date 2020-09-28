/*
DLL Shift Exercise - JavaScript Algorithms and Data Structures Masterclass

Implement the following on a DoublyLinkedList class

shift 

This function should remove a node at the beginning of a DLL.  It should return the node removed.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    shift(){
      if(this.length === 0) {
        return undefined;
      }
      let temp = this.head;
      this.head = this.head.next;
      temp.prev = null;
      temp.next = null;
      this.length--;
      return temp;
    }
}