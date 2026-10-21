class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s: string, wordDict: string[]): string[] {
        const ans: string[] = [];

        const wordSet = new Set(wordDict);

        const cur: string[] = [];

        const dfs = (curS: string, i: number) => {
            if (i >= curS.length && curS.length !== 0) return;
            
            if (curS.length === 0) {
                ans.push(cur.join(" "));
                return;
            }

            const partStr = curS.slice(0, i+1);
            if (wordSet.has(partStr)) {
                cur.push(partStr);
                dfs(curS.slice(i+1), 0);
                wordSet.add(partStr);
                cur.pop();
                dfs(curS, i+1);
            } else {
                dfs(curS, i+1);
            }
        }

        dfs(s, 0);
        return ans;
    }
}
