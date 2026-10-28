class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n: number): number {
        const dp = new Array(n + 1).fill(n);

        dp[0] = 0

        for (let i = 1; i <= n; i++) {
            for (let s = 1; s * s <= i; s++) {
                dp[i] = Math.min(dp[i], 1 + dp[i - s * s]);
            }
        }

        return dp[n];
    }
}
