class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const memo = new Map();

        const dfs = (si: number, ti: number): number => {
            const key = `${si}-${ti}`;
            if (memo.has(key)) return memo.get(key);

            if (ti >= t.length) return 1;
            if (si >= s.length) return 0;


            let ans = dfs(si+1, ti);
            if (s[si] === t[ti]) ans += dfs(si+1, ti+1);

            memo.set(key, ans);

            return ans;
        }

        return dfs(0,0);
    }
}
