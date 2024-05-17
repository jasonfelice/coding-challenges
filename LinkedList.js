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
  
  insert(data, index) {
    //   Inserts a new node with data at index position
    // Takes O(1) time but finding the node takes O(n)
    // Overall takes O(n)
    if (index === 0) this.add(data);
    if (index > 0) {
        let new_node = new Node(data);
        let position = index;
        let current = this.head;
        
        while(position > 1) {
          current = current.next_node;
          position--;
        }
        let prev_node = current;
        let next_node = current.next_node;
        prev_node.next_node = new_node;
        new_node.next_node = next_node;
    }
  }
}

l = new LinkedList();
l.add(5);
l.add(3);
l.add(88);
l.insert(7, 1)
console.log(l.head);