class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const total = nums.reduce((acc, cur)=> acc+cur, 0);

        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            const rightSum = total - leftSum - nums[i];
            if (rightSum === leftSum)
                return i;
            leftSum += nums[i]
        }
        return -1;
    }
}
