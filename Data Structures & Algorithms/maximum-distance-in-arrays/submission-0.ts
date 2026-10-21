class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}
     */
    maxDistance(arrays: number[][]): number {
        const first = arrays[0]
        let curMin = first[0];
        let curMax = first[first.length-1];
        let ans = 0;

        for (let i = 1; i < arrays.length; i++) {
            const localMax = arrays[i][arrays[i].length - 1];
            const localMin = arrays[i][0];

            ans = Math.max(
                ans,
                curMax - localMin,
                localMax - curMin
            );

            curMax = Math.max(curMax, localMax);
            curMin = Math.min(curMin, localMin);
        }

        return ans;
    }
}
