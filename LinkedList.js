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
  
  isEmpty() {
    return this.head === null;
  }
  
  size() {
    let current = this.head;
    let count = 0;
    while(current) {
      count++;
      current = current.next_node;
    }
    return count;
  }
  
  add(data) {
    // Constant time O(1) operation
    let new_node = new Node(data);
    new_node.next_node = this.head;
    this.head = new_node;
  }
}

n1 = new Node(10);
n2 = new Node(29);

l = new LinkedList();

l.head = n1;
console.log(l.size());
l.add(5)
l.add(9)
console.log(l.size())