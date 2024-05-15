// Node 
class Node {
  constructor(data) {
    this.data = data;
  }
  data = null;
  next_node = null;
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }
}

n1 = new Node(10);
n2 = new Node(29);

l = new LinkedList();

l.head = n1;

console.log(l);