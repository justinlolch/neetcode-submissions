class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs: string[], m: number, n: number): number {
        const memo = new Map();

        const dfs = (i: number, rm: number, rn: number): number => {
            if (i >= strs.length) return 0;
            const key = `${i}-${rm}-${rn}`

            if (memo.has(key)) return memo.get(key);
            
            const [mCount, nCount] = [[...strs[i]].filter(e=>e === "0").length, [...strs[i]].filter(e=>e === "1").length]; 

            const include = rm >= mCount && rn >= nCount ? dfs(i+1, rm-mCount, rn-nCount) + 1 : 0;
            const notInclude = dfs(i+1, rm, rn);

            const maxWays = Math.max(include, notInclude);
            
            memo.set(key, maxWays);

            return maxWays;
        }

        return dfs(0, m, n);
    }
}
