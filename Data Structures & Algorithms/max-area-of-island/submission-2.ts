class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const n = grid.length;
        const m = grid[0].length;

        const visited = new Set();
        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const dfs = (i: number, j: number): number => {
            const key = `${i}-${j}`;
            
            if (isOutOfBound(i, j) || visited.has(key) || grid[i][j] === 0) return 0;

            visited.add(key);

            let localArea = 1;

            for (const [di, dj] of directions)
                localArea += dfs(i+di, j+dj);

            return localArea;
        }

        let maxArea = 0;

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                maxArea = Math.max(maxArea, dfs(i,j));

        return maxArea;
    }
}
