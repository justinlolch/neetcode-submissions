class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let [maxSum, curSum] = [nums[0], 0];
        
        for (const num of nums){
            curSum = Math.max(curSum, 0);
            curSum += num
            maxSum = Math.max(curSum, maxSum)
        }
        return maxSum;
    }
}
