// Singly Linked List Function

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

// A singly linked list is a set of nodes
// that are connected by each node's next function.
// Continuous calling of the next function
// on an instance of a Node returns
// another Node Object until a final call of next returns null;

// Example of a Singly Linked List

var head = new Node(1) // => Node {data: 1, next=null};
var node2 = new Node(2) // => Node {data: 2, next=null};
var node3 = new Node(3) // => Node {data: 3, next=null};
var node4 = new Node(4) // => Node {data: 4, next=null};
node3.next = node4;
node2.next = node3;
head.next = node2;

// head =>  {data: 1, next:  {data:2, next:  {data:3, next:  {data:4, next:null}}}};
// head.next => {data:2, next:  {data:3, next:  {data:4, next:null}}};
// head.next.next => {data:3, next:  {data:4, next:null}};
// head.next.next.next => {data:4, next:null};

// Give the head node of a Linked List
// print out each node's data 

// Example - 
// printNodeData(node1) =>
// 1
// 2
// 3
// 4

function printNodeData(head) {
}



// Given the head node of a Linked List,
// return the last node in the linked list.

// Example - 
// lastNode(node1) => {data: 4, next=null};
function lastNode(head) {
}







