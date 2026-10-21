class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const memo = new Map();

        const dfs = (i: number) => {
            if (memo.has(i)) return memo.get(i);
            if (i === s.length) return 1;
            if (i > s.length) return 0; 

            const firstChar = s[i];
            const secondChar = s[i+1];

            let ans;
            if (firstChar === "1" || firstChar === "2" && ["0", "1", "2", "3", "4", "5", "6"].includes(secondChar)) {
                ans = dfs(i + 1) + dfs(i + 2);
            } else if (firstChar === "0")
                ans = 0;
            else {
                ans = dfs(i+1);
            }

            memo.set(i, ans);

            return ans;
        }

        return dfs(0);
    }
}
