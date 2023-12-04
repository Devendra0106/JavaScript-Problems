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

	//Retrieving a node by it's index position in the linked list
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

	//Changing value of a node by it's index position in the linked list
	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	//Adding a node to linked list at a specific position.
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);
		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	//Removing a node from linked list at a specific position.
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		let prevNode = this.get(index - 1);
		let removed = prevNode.next;
		prevNode.next = removed.next;
		this.length--;
		return removed;
	}

	//Print all node values in linked list
	print() {
		let current = this.head;
		let arr = [];
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log("Linked List-->", arr);
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
// list.set(2, "Linked List");
// console.log(list.get(1));
console.log(list.insert(0, "Dev"));
console.log(list.remove(3));
console.log(list);
list.print();
