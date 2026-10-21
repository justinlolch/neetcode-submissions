class Node {
    public key;
    public val;
    public prev = null;
    public next = null;

    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    public capacity: number;
    public cache;
    public left;
    public right;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new Node(0,0);
        this.right = new Node(0,0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // remove node from list
    remove(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    // insert node at right
    insert(node) {
        const prev = this.right.prev;
        
        prev.next = node;
        node.prev = prev;

        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        this.remove(node);
        this.insert(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const existing = this.cache.get(key);

        if (existing !== undefined) {
            existing.val = value;

            this.remove(existing);
            this.insert(existing);

            return;
        }

        const newNode = new Node(key, value);

        this.cache.set(key, newNode);
        this.insert(newNode);
        
        if (this.cache.size > this.capacity) {
            const lru = this.left.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
