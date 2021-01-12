//object Node
class Node {
  //constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//object linkedList
class LinkedList {
  //constructor
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        console.log(current);
        current = current.next;
        console.log(current);
      }

      current.next = node;
    }
    this.size++;
  }
}

let test1 = new LinkedList();
test1.add(10);
console.log("\n");
test1.add(20);
console.log("\n");
test1.add(30);
// console.log("\n");
test1.add(40);
// console.log(test1);
