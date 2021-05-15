// O(n) | O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while (currentNode !== null) {
		let nextUniqueNode = currentNode.next;
		while (nextUniqueNode !== null && nextUniqueNode.value === currentNode.value) {
      nextUniqueNode = nextUniqueNode.next;
		}
		currentNode.next = nextUniqueNode;
		currentNode = currentNode.next;
	}
  return linkedList;
}
