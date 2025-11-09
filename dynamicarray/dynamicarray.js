import StaticArray from './staticarray.js';
export default class DynamicArray {
    #array;
    #capacity;
    #size;
    constructor(initialCapacity = 4) {
        this.#capacity = initialCapacity;
        this.#size = 0;
        this.#array = new StaticArray(this.#capacity);
    }
    size() {
        return this.#size;
    }
    capacity() {
        return this.#capacity;
    }



    grow() {
        this.#capacity = Math.ceil(1.5*this.#capacity);
        const newArray = new StaticArray(this.#capacity);
        for (let i = 0; i < this.#size; i++) {
            newArray[i] = this.#array[i];
        }
        this.#array = newArray;
    }

    add(item) {
        if (this.#size === this.#capacity) {
            this.grow();
        }
        this.#array[this.#size] = item;
        this.#size++;
    }

    get(index) {
        this.#check_index(index);
        return this.#array[index];
    }

    set(index, item) {
        this.#check_index(index);
        this.#array[index] = item;
    }

    insert(index, item) {
        if (index < 0 || index > this.#size) {
            throw new RangeError('Index out of bounds');
        }
        if (this.#size === index) {
            this.add(item);
        }
        else {
            if (this.#size === this.#capacity) {
                this.grow();
            }
            for (let i = this.#size; i > index; i--) {
                this.#array[i] = this.#array[i - 1];
            }
            this.#array[index] = item;
            this.#size++;
        }
    }
    
    remove(index) {
        this.#check_index(index);
        for (let i = index; i < this.#size - 1; i++) {
            this.#array[i] = this.#array[i + 1];
        }
        this.#size--;
    }

    clear() {
        this.#size = 0;
        this.#array = new StaticArray(this.#capacity);
    }

    #check_index(index) {
        if (index < 0 || index >= this.#size) {
            throw new RangeError('Index out of bounds');
        }
    }

}
