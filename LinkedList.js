//Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //If there is no starting node.
      //Make both head & tail = to the created node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //The last linked list is now pointing to the new one created from push()
      this.tail = newNode; //The last linked list becomes the new node just created from push()
    }
    this.length++; //Length is increased by 1.
    this; //Return the updated Linkedlist
  }

  pop() {
    if (!this.head) return undefined; //If nothing exist
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      //if a node is pointing to another node..
      pre = temp; //set pre to the current node
      temp = temp.next; //set temp to the next node
    }

    this.tail = pre; //After loop finish set the tail the the second to last node.
    this.tail.next = null; //Set the last node to null aka deleting it.
    this.length--;
    if (this.length === 0) {
      return undefined;
    }
    return temp;
  }

  //Add new value to start of linkedlist
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //Node created from unshift() is pointing to the first node in the linkedlist.
      this.head = newNode; //The head is now pointing to the node created from unshift()
    }

    this.length++;
    return this;
  }

  //Removes first value in linkedlist
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null; //Breaks the connection of node referencing next node in linkedlist.
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //Get value at index declared.
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    console.log(this);
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if ((index = this.length)) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    //Index doesn't exist
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return false;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
  }
}

const myLinkedList = new LinkedList("one");
myLinkedList.push("two");
myLinkedList.push("three");
