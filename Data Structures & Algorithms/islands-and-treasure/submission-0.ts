class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const INF = Math.pow(2, 31) - 1;
        const n = grid.length;
        const m = grid[0].length;
        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const stack = [];

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                if (grid[i][j] === 0)
                    stack.push([i,j]);     

        while (stack.length > 0) {
            const length = stack.length;
            for (let i = 0; i < length; i++) {
                const cur = stack.shift();
                directions.forEach(d => {
                    const ni = d[0] + cur[0];
                    const nj = d[1] + cur[1];
                    const curCell = grid[cur[0]][cur[1]];
                    if (!isOutOfBound(ni, nj) && grid[ni][nj] === INF) {
                        grid[ni][nj] = curCell + 1;
                        stack.push([ni, nj]);
                    }
                })
            }
        }   

    }
}
