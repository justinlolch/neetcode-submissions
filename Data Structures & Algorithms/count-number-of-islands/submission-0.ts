class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const n: number = grid.length;
        const m: number = grid[0].length;

        let islands: number = 0;

        const directions: number[][] = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const dfs = (i: number, j: number) => {
            if (isOutOfBound(i, j) || grid[i][j] === "0") return;

            grid[i][j] = "0";

            for (const [di, dj] of directions)
                dfs(i + di, j + dj);

            return;
        }

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === "1") {
                    dfs(i, j);
                    islands++;
                }
            }

        return islands;
    }
}
