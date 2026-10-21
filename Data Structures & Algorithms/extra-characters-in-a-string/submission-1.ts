class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s: string, dictionary: string[]): number {
        const dictSet = new Set<string>(dictionary);
        const memo = new Map();

        const dfs = (i: number): number => {
            if (i >= s.length)
                return 0;

            if (memo.has(i)) return memo.get(i);

            let ans = 1 + dfs(i + 1);
            let j = i + 1;

            while (j <= s.length) {
                const word = s.slice(i, j);
                if (dictSet.has(word))
                    ans = Math.min(ans, dfs(j))
                j++;
            }

            memo.set(i, ans);
            return ans;
        }

        return dfs(0);
    }
}
