//Node - Holds value and reference of next node
class Node {
	constructor(val) {
		this.val = val; //piece of data - val
		this.next = null; //reference to next node - next
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//adding node to end of linked list
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	//removing node from the end of linked list
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	//removing node from the beginning of linked list
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	//adding node to the beginning of linked list
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter < index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("LL");
list.push("welcome!");
// console.log(list.pop());
// console.log(list.shift());
// list.unshift("Hey, ");
// console.log(list.get(1));
// console.log(list);
console.log(list.get(1));
list.set(2, "Linked List");
console.log(list.get(1));
