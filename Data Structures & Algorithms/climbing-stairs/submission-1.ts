class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = new Map();

        const dfs = (i) => {
            if (memo.has(i)) return memo.get(i);

            let ans;
            if (i === n) ans = 1;
            else if (i > n) ans = 0;
            else ans = dfs(i+1) + dfs(i+2);
            
            memo.set(i, ans);

            return ans;
        }

        return dfs(0);
    }
}
