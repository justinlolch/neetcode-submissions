class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix: string[][]): number {
        const ROW = matrix.length;
        const COL = matrix[0].length;
        let max = 0;

        const memo = new Map();

        const isOutOfBound = (r: number, c: number): boolean => {
            return r >= ROW || c >= COL || r < 0 || c < 0;
        }

        const dfs = (r: number, c: number) => {
            if (isOutOfBound(r,c)) return 0;

            const key = `${r}-${c}`;

            if (memo.has(key)) return memo.get(key);

            let way = 0;
            if (matrix[r][c] === "1") {
                const right = dfs(r, c + 1);
                const bottom = dfs(r + 1, c);
                const diagonal = dfs(r + 1, c + 1);

                way = Math.min(right, bottom, diagonal) + 1;
            }

            memo.set(key, way);

            max = Math.max(max, way);

            return way;
        }
        
        for (let i = 0; i < ROW; i++)
            for (let j = 0; j < COL; j++)
                dfs(i, j);

        return Math.pow(max, 2);
    }
}
