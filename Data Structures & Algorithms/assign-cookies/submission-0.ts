class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g: number[], s: number[]): number {
        g.sort((a,b)=>a-b);
        s.sort((a,b)=>a-b);

        let l = 0, r = 0;
        let content = 0;

        while (l < g.length && r < s.length) {
            if (g[l] <= s[r]) {
                content += 1;
                l++;
                r++;
            } else {
                r++;
            }
        }

        return content;
    }
}
