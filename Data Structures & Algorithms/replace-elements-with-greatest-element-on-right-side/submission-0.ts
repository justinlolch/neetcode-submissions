class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const prefixMax = [];

        let curMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            prefixMax.push(curMax);
            curMax = Math.max(curMax, arr[i]);
        }

        return prefixMax.reverse();
    }
}
