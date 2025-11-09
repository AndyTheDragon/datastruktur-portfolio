export default class DoublyLinkedList {
    head;
    tail;
    #size;

    constructor() {
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current !== null) {
            output += current.data + ' <-> ';
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }

    addLast(data) {
        const newNode = { data: data, next: null, prev: null };
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.#size++;
    }

    addFirst(data) {
        const newNode = { data: data, next: null, prev: null };
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.#size++;
    }

    get(index) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    getFirst() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    getLast() {
        if (this.tail === null) {
            return null;
        }
        return this.tail.data;
    }

    set(index, data) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.data = data;
    }

    insert(index, data) {
        if (index < 0 || index > this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        const newNode = { data: data, next: null, prev: null };
        if (index === 0) {
            this.addFirst(data);
        } else if (index === this.#size) {
            this.addLast(data);
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
            this.#size++;
        }
    }

    insertBefore(index,data) {
        this.insert(index, data);
    }
    
    insertAfter(index,data) {
        this.insert(index + 1, data);
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.#size--;
        return data;
    }
    removeLast() {
        if (this.tail === null) {
            return null;
        }
        const data = this.tail.data;
        this.tail = this.tail.prev;
        if (this.tail !== null) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.#size--;
        return data;
    }
    
    remove(index) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        if (index === 0) {
            return this.removeFirst();
        }
        if (index === this.#size - 1) {
            return this.removeLast();
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.#size--;
        return current.data;
    }

    getFirstNode() {
        return this.head;
    }

    getLastNode() {
        return this.tail;
    }

    getNextNode(node) {
        return node.next;
    }

    getPreviousNode(node) {
        return node.prev;
    }

    getNode(index) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    makeLast(node) {
        if (node === this.tail) {
            return;
        }
        if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.prev = this.tail;
        node.next = null;
        this.tail.next = node;
        this.tail = node;
    }

    makeFirst(node) {
        if (node === this.head) {
            return;
        }
        if (node === this.tail) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = this.head;
        node.prev = null;
        this.head.prev = node;
        this.head = node;
    }

    insertBeforeNode(node,data) {
        const newNode = {data:data, next:null, prev:null}
        if (node === this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        else {
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev.next = newNode;
            node.prev = newNode;
        }
        this.#size++;
    }

    insertAfterNode(node,data) {
        const newNode = {data:data, next:null, prev:null}
        if (node === this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = node.next;
            newNode.prev = node;
            node.next.prev = newNode;
            node.next = newNode;
        }
        this.#size++;
    }

    removeNode(node) {
        if (node === this.head) {
            return this.removeFirst();
        }
        if (node === this.tail) {
            return this.removeLast();
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.#size--;
        return node.data;
    }

    swap(nodeA, nodeB) {
        if (nodeA === nodeB) {
            return;
        }

        const tempData = nodeA.data;
        nodeA.data = nodeB.data;
        nodeB.data = tempData;
    }

}