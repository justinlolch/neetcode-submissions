class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n: number): number {
        const colSet = new Set<number>();
        const posdSet = new Set<number>();
        const negdSet = new Set<number>();

        let ans = 0;

        const dfs = (r: number) => {
            if (r === n) {
                ans++;
                return;
            }

            for (let c = 0; c < n; c++) {
                if (colSet.has(c) || posdSet.has(r + c) || negdSet.has(r - c)) continue;

                colSet.add(c);
                posdSet.add(r + c);
                negdSet.add(r - c);

                dfs(r+1);

                colSet.delete(c);
                posdSet.delete(r + c);
                negdSet.delete(r - c);
            }
        }

        dfs(0);
        return ans;
    }
}
