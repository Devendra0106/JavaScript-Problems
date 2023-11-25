//Node
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
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("LL");
list.push("welcome!");
list.push("ok!");
console.log(list);
