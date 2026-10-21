class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const used = new Set();

        const n = board.length;
        const m = board[0].length;

        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= n || j >= m;
        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        const backtrack = (i: number, j: number, wordIndex: number): boolean => {
            if (wordIndex === word.length) return true;
            if (isOutOfBound(i, j)) return false;

            const key = `${i}-${j}`;
            const curChar = board[i][j];
            const wantedChar = word[wordIndex];

            if (used.has(key) || curChar !== wantedChar) {
                return false;
            }

            used.add(key);

            const isFound: boolean = directions.some(d => backtrack(i+d[0], j+d[1], wordIndex + 1));

            used.delete(key);

            return isFound;
        };

        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                if (backtrack(i, j, 0))
                    return true;

        return false;
    }
}
