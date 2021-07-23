function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        currentNode = currentNode.next;
        previousNode = currentNode;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.empty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = node;
      node.next = currentNode;
    }
    length++;
  };

  this.removeAt = function (index, element) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

let test = new LinkedList();
test.add("Gab");
test.add("Momsi");
test.add("Mel");
test.add("Tops");
console.log(test.size());
test.addAt(2, "YOLO");
console.log(test.elementAt(2));
