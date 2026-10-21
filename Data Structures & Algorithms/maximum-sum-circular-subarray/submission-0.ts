class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
        let total = 0;
        let curMax = 0, curMin = 0;
        let gMax = nums[0], gMin = nums[0];

        for (const num of nums){
            curMax = Math.max(num, curMax + num);
            curMin = Math.min(num, curMin + num);
            total += num
            gMax = Math.max(curMax, gMax);
            gMin = Math.min(curMin, gMin);
        }

        return gMax > 0 ? Math.max(gMax, total - gMin) : gMax;
    }
}
