class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const totalSum = nums.reduce((acc, cur)=> acc+cur, 0);
        if (totalSum % 2 === 1)
            return false;
        
        const targetSum = totalSum / 2;
        const memo = new Map<string, boolean>();

        const dfs = (i: number, curSum: number): boolean => {
            const key = `${i}-${curSum}`;
            if (curSum === targetSum)
                return true;
            if (i >= nums.length || curSum > targetSum)
                return false;
            if (memo.has(key)) return memo.get(key)!;

            const res = dfs(i + 1, curSum + nums[i]) || dfs(i + 1, curSum);
            memo.set(key, res);
            return res;
        }

        return dfs(0, 0);
    }
}