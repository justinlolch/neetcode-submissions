class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    canSeePersonsCount(heights: number[]): number[] {
        const n = heights.length;
        const res = new Array(n).fill(0);
        const stack = [];
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && stack[stack.length - 1] < heights[i]) {
                stack.pop();
                res[i]++;
            }
            if (stack.length) {
                res[i]++;
            }
            stack.push(heights[i]);
        }
        return res;
    }
}
