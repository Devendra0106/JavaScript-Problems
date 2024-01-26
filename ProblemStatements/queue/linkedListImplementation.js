//Queue implementation using linked list
//Node: holding value & reference of next node
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//Queue Data Structure
class Queue {
	constructor() {
		this.first = null; //First element in queue
		this.last = null; //Last element in queue
		this.size = 0; //Size of queue
	}

	//Insert an element/node at end of queue
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	//Remove an element/node from start of queue
	dequeue() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}

let q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
