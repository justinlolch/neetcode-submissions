class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const arr = Array.from({ length: n }, () => new Array(n).fill("."));

        const colSet = new Set();
        const posdSet = new Set();
        const negdSet = new Set();

        const ans = [];

        const dfs = (r: number) => {
            if (r === n) {
                // clone arr to ans;
                const curBoard = arr.map(r => r.join(""));
                ans.push(curBoard);
                return;
            }

            for (let c = 0; c < n; c++)
                if (colSet.has(c) || posdSet.has(c-r) || negdSet.has(c+r)) continue;
                else {
                    colSet.add(c);
                    posdSet.add(c-r);
                    negdSet.add(c+r);
                    arr[r][c] = "Q";

                    dfs(r+1);

                    colSet.delete(c);
                    posdSet.delete(c-r);
                    negdSet.delete(c+r);
                    arr[r][c] = "."
            }
        }

        dfs(0);
        return ans;
    }
}