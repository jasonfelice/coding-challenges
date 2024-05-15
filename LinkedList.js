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
  
  search(key) {
    // Serach for the first node containing data that matches the key
    // Return the node; or null if not found
    // Take O(n) time (Linear time)
    let current = this.head;
    while(current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.next_node;
      }
    }
    return null;
  }
}

l = new LinkedList();
l.add(5);
l.add(3);
l.add(88);

console.log(l.search(3));