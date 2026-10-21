class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums: number[], k: number): number {
        nums.sort((a,b) => a - b);
        const prefixSum = [];

        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            prefixSum.push(sum);
        }

        let l = 0, r = 1;
        let max = 1;

        while (r < nums.length) {
            const requiredSum = nums[r] * (r - l + 1);
            const currentSum = prefixSum[r] - (prefixSum[l-1] ?? 0);
            const diff = requiredSum - currentSum;
            if (diff <= k) {
                max = Math.max(max, r-l + 1);
                r++;
            } else {
                l++;
            }
        }

        return max;
    }
}
