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
	//adding node -to end of linked list
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
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("LL");
list.push("welcome!");
list.push("ok!");
list.pop();
console.log(list.pop());
