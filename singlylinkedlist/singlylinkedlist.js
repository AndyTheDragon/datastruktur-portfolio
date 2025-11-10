export default class SinglyLinkedList {
    head;
    #size;

        
    constructor() {
        this.head = null;
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
        this.#size = 0;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current !== null) {
            output += current.data + ' -> ';
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }

    add(data) {
        const newNode = { data: data, next: null };
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
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
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current.data;
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
        const newNode = { data: data, next: null };
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.#size++;   
    }

    getNode(index) {
        if (index<0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        let current = this.head;
        for (let i=0; i<index; i++) {
            current=current.next;
        }
        return current;
    }

    getFirstNode() {
        return this.getNode(0);
    }

    getLastNode() {
        return this.getNode(this.#size-1);
    }

    getNextNode(node) {
        return node.next;
    }

    getPreviousNode(node) {
        if (node === this.head) {
            return null;
        }
        let current = this.head;
        while (current.next!==node) {
            current = current.next;
        }
        return current;
    }
    
    insertBefore(node, data) {
        const newNode = { data: data, next: null };
        if (node === this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let previous = this.getPreviousNode(node);
            newNode.next = node;
            previous.next = newNode;
        }
        this.#size++;
    }
    
    insertAfter(node, data) {
        const newNode = { data: data, next: null };
        newNode.next = node.next;
        node.next = newNode;
        this.#size++;
    }

    remove(index) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError(`Index ${index} out of bounds`);
        }
        if (index === 0) {
            return this.removeFirst();
        }
        let previous = this.getNode(index-1);
        previous.next = this.getNode(index).next;
        this.#size--;
    }

    removeFirst() {
        if (this.head.next === null) {
            this.clear();
        }
        else {
            this.head = this.head.next;
            this.#size--;
        }
    }

    removeLast() {
        if (this.head.next === null) {
            this.clear();
            return;
        }
        let current = this.head;
        while (current.next?.next!==null) {
            current = current.next;
        }
        current.next = null;
        this.#size--;
    }

    removeNode(node) {
        if (node === this.head) {
            this.removeFirst();
            return;
        }
        let previous = this.getPreviousNode(node);
        previous.next = node.next;
        this.#size--;
    }

}
