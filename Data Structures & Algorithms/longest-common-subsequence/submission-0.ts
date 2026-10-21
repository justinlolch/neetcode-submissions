class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const memo = new Map();

        const dfs = (t1p: number, t2p: number) => {
            const key = `${t1p}-${t2p}`;

            if (memo.has(key))
                return memo.get(key);

            if (t1p >= text1.length || t2p >= text2.length)
                return 0;

            let result;
            if (text1[t1p] === text2[t2p])
                result = 1 + dfs(t1p+1, t2p+1);
            else {
                result = Math.max(
                    dfs(t1p+1, t2p),
                    dfs(t1p, t2p+1)
                )
            }

            memo.set(key, result);

            return result;
        }
        
        return dfs(0,0);
    }
}
