// search for a particular node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  printTarget(target) {
    let current = this;
    while (current !== null) {
      if (current.data === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const box1 = new Node(2);
const box2 = new Node(4);
const box3 = new Node(6);

box1.next = box2;
box2.next = box3;

console.log(box3.printTarget(6));
