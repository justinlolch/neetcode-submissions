class MinStack {
    private stack: number[];
    private min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const curMin = this.min[this.min.length - 1] ?? Infinity;
        this.stack.push(val);
        this.min.push(Math.min(curMin, val));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min[this.min.length - 1];
    }
}
