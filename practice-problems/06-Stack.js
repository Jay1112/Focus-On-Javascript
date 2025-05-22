class Stack {
    constructor() {
        this.arr = [];
    }
    
    push(element) {
        this.arr.push(element);
        return this.size();
    }
    
    pop() {
        if (!this.isEmpty()) {
            const top = this.arr[this.arr.length - 1];
            this.arr.pop();
            return top;
        }
        return undefined;
    }
    
    peek() {
        if (!this.isEmpty()) {
            const top = this.arr[this.arr.length - 1];
            return top;
        }
        return undefined;
    }
    
    isEmpty() {
        return this.arr.length === 0;
    }
    
    size() {
        return this.arr.length;
    }
    
    clear() {
        this.arr = [];
    }
}

module.exports = Stack;