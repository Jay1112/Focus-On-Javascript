class AutocompleteSystem {
    constructor() {
        this.root = {}; // Root is a plain object
    }
    insert(word) {
        this.root[word] = 1;
    }

    search(prefix) {
        return Object.keys(this.root).filter((item) => {
            return item.startsWith(prefix)
        })
    }
}

module.exports = AutocompleteSystem;