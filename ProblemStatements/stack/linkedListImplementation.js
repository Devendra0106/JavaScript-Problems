//Stack implementation using linked list
//Node: holding value & reference of next node
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//Stack Data Structure
class Stack {
	constructor() {
		this.first = null; //First element in stack
		this.last = null; //Last element in stack
		this.size = 0; //Size of Stack
	}

	//Push a element/node on top of stack: LIFO
	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	//Pop out a element/node from top of stack: LIFO
	pop() {
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

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); //3
console.log(stack.pop()); //2
