class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a,b)=>a-b);
        const ans = [];

        const dfs = (i: number, curSet: number[], sum: number) => {
            if (sum === target) {
                ans.push([...curSet]);
                return;
            }

            if (sum > target || i >= candidates.length)
                return;

            curSet.push(candidates[i])
            dfs(i + 1, curSet, sum + candidates[i]);
            curSet.pop();
            
            while (i + 1 < candidates.length && candidates[i] === candidates[i+1])
                i += 1;
            dfs(i + 1, curSet, sum);
        }

        dfs(0, [], 0);

        return ans;
    }
}