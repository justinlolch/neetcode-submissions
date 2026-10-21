class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const memo = new Map();

        const dfs = (i1: number, i2: number, i3: number): boolean => {
            if (i3 >= s3.length && i1 >= s1.length && i2 >= s2.length) return true;
            else if (i3 >= s3.length) {
                if (i1 <= s1.length) return false;
                if (i2 <= s2.length) return false;
            }

            const key = `${i1}-${i2}-${i3}`;
            if (memo.has(key)) return memo.get(key);

            const c1 = s1[i1];
            const c2 = s2[i2];
            const c3 = s3[i3];

            let ans;

            if (c1 === c2 && c2 === c3) 
                ans = dfs(i1+1, i2, i3+1) || dfs(i1, i2+1, i3+1);
            else if (c1 === c3)
                ans = dfs(i1+1, i2, i3+1);
            else if (c2 === c3)
                ans = dfs(i1, i2+1, i3+1);
            else ans = false;

            memo.set(key, ans);

            return ans;
        }

        return dfs(0, 0, 0);
    }
}
