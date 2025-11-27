export default class Tree {
    root;

    constructor() {
        this.root = null;
    }

    dump() {
        console.log(JSON.stringify(this.root, null, 2));
    }

    addValue(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Simple insertion: add as a child of the root for demonstration
            this.root.appendChild(newNode);
        }
    }

    findValue(value) {
        function recursiveSearch(node, value) {
            if (node.value === value) {
                return node;
            }
            for (let child of node.childNodes) {
                const result = recursiveSearch(child, value);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        }

        if (this.root === null) {
            return null;
        }
        return recursiveSearch(this.root, value);
    }

    removeValue(value) {
        function recursiveRemove(node, value) {
            for (let i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].value === value) {
                    node.removeChild(node.childNodes[i]);
                    return true;
                } else {
                    const result = recursiveRemove(node.childNodes[i], value);
                    if (result) {
                        return true;
                    }
                }
            }
            return false;
        }

        if (this.root === null) {
            return false;
        }
        if (this.root.value === value) {
            this.root = null; // Removing the root node
            return true;
        }
        return recursiveRemove(this.root, value);
    }
}

class Node {
    parent;
    childNodes;
    value;

    constructor(value) {
        this.value = value;
        this.parent = null;
        this.childNodes = [];
    }

    firstChild() {
        if (this.childNodes.length === 0) {
            return null;
        }
        return this.childNodes[0];
    }

    lastChild() {
        if (this.childNodes.length === 0) {
            return null;
        }
        return this.childNodes[this.childNodes.length - 1];
    }

    hasChildNodes() {
        return this.childNodes.length > 0;
    }

    appendChild(child) {
        child.parent = this;
        this.childNodes.push(child);
    }

    removeChild(child) {
        const index = this.childNodes.indexOf(child);
        if (index === -1) {
            throw new Error("Child node not found");
        }
        child.parent = null;
        this.childNodes.splice(index, 1);
    }

    replaceChild(newChild, oldChild) {
        // Check that oldChild is indeed a child of this node
        const index = this.childNodes.indexOf(oldChild);
        if (index === -1) {
            throw new Error("Child node not found");
        }
        // Add all children from oldChild to newChild
        for (let child of oldChild.childNodes) {
            newChild.appendChild(child);
        }
        // Insert newChild in place of oldChild in parents children array
        this.childNodes[index] = newChild;
        newChild.parent = this;
        oldChild.parent = null;
        
    }
}
/*
let mynode = new Node(10);
let myroot = new Node(2);
myroot.appendChild(mynode);
console.log(myroot);
*/