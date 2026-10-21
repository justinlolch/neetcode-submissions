class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (const op of operations) {
            const n = stack.length;
            if (op === '+') {
                stack.push(stack[n-1] + stack[n-2]);
            }
            else if (op === "D") {
                stack.push(stack[n-1] * 2);
            }
            else if (op === "C") {
                stack.pop();
            }
            else stack.push(parseInt(op));
        }

        return stack.reduce((acc, cur) => acc + cur, 0);
    }
}
