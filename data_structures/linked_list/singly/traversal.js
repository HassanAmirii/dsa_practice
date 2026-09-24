/*
Creating an Example Linked List of Size 3 to Understand Working
Create the first node

Allocate memory for the first node and Store data in it.
Mark this node as head.
Create the second node

Allocate memory for the second node and Store data in it.
Link the first node’s next to this new node.
Create the third node

Allocate memory for the third node and Store data in it.
Link the second node’s next to this node.
Set its next to NULL to ensure that the next of the last is NULL.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  printList() {
    let current = this;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

box1 = new Node(1);
box2 = new Node(2);
box3 = new Node(3);

box1.next = box2;
box2.next = box3;

box1.printList();
