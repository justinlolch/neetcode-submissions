class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const sum = nums.reduce((acc, cur) => acc + cur, 0);
        if (sum % 2 === 1) return false;

        const target: number = sum / 2;

        const dfs = (i: number, curSum: number) => {
            if (curSum === target) return true;
            if (curSum > target) return false;

            if (i >= nums.length) return false;

            return dfs(i + 1, curSum + nums[i]) || dfs(i + 1, curSum);
        } 
        
        return dfs(0, 0);
    }
}