class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr: number[]): number {
        let l = 0, r = 1, max = 1, prevOp;

        while (r < arr.length) {
            if (arr[r - 1] > arr[r] && prevOp !== 1) {
                max = Math.max(max, r - l + 1);
                prevOp = 1;
                r++;
            } else if (arr[r - 1] < arr[r] && prevOp !== 0) {
                max = Math.max(max, r - l + 1);
                prevOp = 0;
                r++;
            } else {
                r = arr[r] === arr[r-1] ? r + 1 : r ;
                l = r - 1;
                prevOp = null;
            }
        }

        return max;
    }
}