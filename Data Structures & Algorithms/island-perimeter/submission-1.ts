class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid: number[][]): number {
        let ans = 0;

        const directions = [[0,1],[1,0],[-1,0],[0,-1]];

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= grid.length || j >= grid[0].length;

        const visited = new Set<string>();

        const stack = [];

        outer: for (let i = 0; i < grid.length; i++)
            for (let j = 0; j < grid[i].length; j++)
                if (grid[i][j] === 1) {
                    stack.push([i,j]);
                    visited.add(`${i}-${j}`);
                    break outer;
                }

        while (stack.length > 0) {
            const next = stack.shift();
            for (const d of directions) {
                const nextI = d[0] + next[0];
                const nextJ = d[1] + next[1];
                if (isOutOfBound(nextI, nextJ) || grid[nextI][nextJ] === 0)
                    ans++;
                else {
                    const nextKey = `${nextI}-${nextJ}`;
                    if (!visited.has(nextKey)) {
                        visited.add(nextKey);
                        stack.push([nextI, nextJ]);
                    }
                }
            }
        }

        return ans;
    }
}