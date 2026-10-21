class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rM = new Map();
        const cM = new Map();
        const bM = new Map();

        for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++) {
                const cur = board[i][j];
                if (cur === ".") continue;
                const bKey = `${Math.floor(i/3)}-${Math.floor(j/3)}`;
                if (!rM.has(i)) rM.set(i, new Set());
                if (!cM.has(j)) cM.set(j, new Set());
                if (!bM.has(bKey)) bM.set(bKey, new Set());

                if (rM.get(i).has(cur)) return false;
                else rM.get(i).add(cur);

                if (cM.get(j).has(cur)) return false;
                else cM.get(j).add(cur);

                if (bM.get(bKey).has(cur)) return false;
                else bM.get(bKey).add(cur);
            }

        return true;
    }
}
