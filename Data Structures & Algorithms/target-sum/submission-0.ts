class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        let ans = 0;

        const dfs = (i: number, curSum: number) => {
            if (i >= nums.length) {
                if (curSum === target)
                    ans++;
                return;
            }

            dfs(i+1, curSum + nums[i]);
            dfs(i+1, curSum - nums[i]);
        }

        dfs(0, 0);

        return ans;
    }
}
