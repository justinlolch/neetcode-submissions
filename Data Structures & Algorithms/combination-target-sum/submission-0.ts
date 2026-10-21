class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const resultSet = [];
        nums = nums.sort((a,b) => a-b);

        const dfs = (i, curSet, curSetSum) => {
            if (curSetSum === target) {
                resultSet.push([...curSet]);
                return;
            } else if (i >= nums.length) {
                return;
            }

            const cur = nums[i];

            // not-include
            dfs(i+1, curSet, curSetSum);

            // include
            if (curSetSum + cur <= target) {
                curSet.push(cur);
                dfs(i, curSet, curSetSum + cur);
                curSet.pop();
            }
        }

        dfs(0, [], 0);

        return resultSet;
    }
}
