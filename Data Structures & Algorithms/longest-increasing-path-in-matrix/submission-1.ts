class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        const memo = new Map();

        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];
        const n = matrix.length;
        const m = matrix[0].length;

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const visited = new Set();
        const dfs = (i: number, j: number, lastNum: number): number => {
            const key = `${i}-${j}`;
            if (visited.has(key) || isOutOfBound(i,j) || matrix[i][j] <= lastNum) return 0;

            if (memo.has(key)) return memo.get(key);

            const max = Math.max(...directions.map(d => {
                visited.add(key);
                const l = dfs(i+d[0], j+d[1], matrix[i][j]) + 1
                visited.delete(key);
                return l;
            }));

            memo.set(key, max);            

            return max;
        };

        let max = 0;

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                max = Math.max(max, dfs(i, j, -1));

        return max;
    }
}
