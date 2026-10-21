class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums: number[]): number {
        const memo = new Map();

        const dfs = (l: number, r: number) => {
            if (l > r) return 0;

            const key = `${l}-${r}`;
            if (memo.has(key)) return memo.get(key);

            let max = 0;
            for (let i = l; i <= r; i++) {
                const coins = dfs(l, i - 1) + dfs(i + 1, r) + (nums[l - 1] ?? 1) * nums[i] * (nums[r + 1] ?? 1);
                max = Math.max(max, coins);
            }

            memo.set(key, max);

            return max;
        }

        return dfs(0, nums.length - 1);
    }
}
