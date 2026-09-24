//insertion : insert at front dynamically with a function

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
newBox = new Node(4);

box1.next = box2;
box2.next = box3;

newBox.next = box1;

newBox.printList();
