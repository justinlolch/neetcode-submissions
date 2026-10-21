class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const n = board.length;
        const m = board[0].length;
        const directions = [[0,1],[1,0],[-1,0],[0,-1]];

        const visited = new Set();
        const connected = new Set();

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;

        const dfs = (i: number, j: number) => {
            const key = `${i}-${j}`;
            if (isOutOfBound(i,j) || visited.has(key) || board[i][j] === "X") return;

            visited.add(key);
            connected.add(key);

            for (const [di, dj] of directions)
                dfs(i+di, j+dj);
        }

        for (let i = 0; i < n; i++) {
            dfs(i, 0);
            dfs(i, m - 1);
        }

        for (let j = 0; j < m; j++) {
            dfs(0, j);
            dfs(n - 1, j);
        }

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++) {
                const key = `${i}-${j}`;
                if (board[i][j] === "O" && !connected.has(key))
                    board[i][j] = "X"
            }

    }
}
