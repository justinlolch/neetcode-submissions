class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result = [];
        const curSet = [];

        const dfs = (i: number) => {
            if (i >= nums.length) {
                result.push([...curSet]);
                return;
            }

            curSet.push(nums[i]);
            dfs(i+1);
            curSet.pop();
            dfs(i+1);
        }

        dfs(0);

        return result;
    }
}
