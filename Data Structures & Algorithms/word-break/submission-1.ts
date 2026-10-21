class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const wordSet = new Set(wordDict);
        const memo = new Map();

        const dfs = (i: number): boolean => {
            if (i === s.length) return true;
            if (memo.has(i)) return memo.get(i);

            for (let j = i + 1; j <= s.length; j++) {
                const word = s.slice(i, j);

                if (wordSet.has(word) && dfs(j)) {
                    memo.set(i, true);
                    return true;
                }
            }

            memo.set(i, false);
            return false;
        }

        return dfs(0);
    }
}
