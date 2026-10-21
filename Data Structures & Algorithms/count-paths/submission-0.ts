class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let dp = new Array(n).fill(0);
        dp[0] = 1;

        for (let i = 0; i < m; i++) {
            const curDp = new Array(n).fill(0);
            for (let j = 0; j < n; j++) {
                const top = dp[j];
                const left = curDp[j-1] ?? 0;
                curDp[j] = top + left;
            }
            dp = curDp;
        }

        return dp[dp.length - 1];
    }
}
