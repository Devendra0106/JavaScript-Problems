class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(value) {
		if (this.root === null) return false;
		let current = this.root,
			found = false;
		while (current && !false) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return null;
		return current;
	}

	//Breadth First Search
	BFS() {
		let node = this.root,
			queue = [],
			data = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
}

// 			 10
// 	  7		  13
//  3   8 12   15
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(13);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(15);

// console.log(JSON.stringify(bst));
console.log(bst.BFS());
