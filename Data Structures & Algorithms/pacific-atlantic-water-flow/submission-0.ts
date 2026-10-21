interface CELL {
    isConPac: boolean;
    isConAtl: boolean
}

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const memo = new Map<string, CELL>();
        const directions = [[0,1],[1,0],[-1, 0], [0, -1]];

        const n = heights.length;
        const m = heights[0].length;

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const constructKey = (i: number, j: number): string => `${i}-${j}`;

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++) {
                const key = constructKey(i, j);

                const c: CELL = {
                    isConPac: i === 0 || j === 0,
                    isConAtl: i === n - 1 || j === m - 1
                };

                memo.set(key, c);
            }

     
        const visitedPac = new Set<string>();
        const visitedAtl = new Set<string>();

        const dfs = (i: number, j: number, visited: Set<string>, prevI: number, prevJ: number, ocean: "pac" | "atl") => {
            if (isOutOfBound(i, j)) return;

            const key = constructKey(i, j);

            if (visited.has(key) || heights[i][j] < heights[prevI][prevJ]) return;

            visited.add(key);
            const cell = memo.get(key);

            ocean === "pac" ? cell.isConPac = true: cell.isConAtl = true;

            for (const [di, dj] of directions)
                dfs(i+di, j+dj, visited, i, j, ocean);

        }

        for (let i = 0; i < n; i++) {
            dfs(i, 0, visitedPac, i, 0, "pac");
            dfs(i, m - 1, visitedAtl, i, m - 1, "atl");
        }

        for (let j = 0; j < m; j++) {
            dfs(0, j, visitedPac, 0, j, "pac");
            dfs(n - 1, j, visitedAtl, n - 1, j, "atl");
        }

        const ans = [];

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++) {
                const cell = memo.get(constructKey(i, j));
                if (cell.isConPac === true && cell.isConAtl === true)
                    ans.push([i,j]);
            }

        return ans;
    }
}
