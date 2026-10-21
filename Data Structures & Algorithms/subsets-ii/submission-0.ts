class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums = nums.sort((a,b)=>a-b);
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

            while (i + 1 < nums.length && nums[i] === nums[i+1])
                i += 1;    
            dfs(i+1);
        }

        dfs(0);

        return result;
    }
}
