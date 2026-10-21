class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const direction = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0]
        ]

        const MAX_ROW = grid.length;
        const MAX_COL = grid[0].length;

        let minute = 0;

        let freshFruit = 0;
        const rottenStack = [];

        for (let i = 0; i < MAX_ROW; i++) {
            for (let j = 0; j < MAX_COL; j++) {
                if (grid[i][j] === 1)
                    freshFruit += 1;
                else if (grid[i][j] === 2)
                    rottenStack.push([i,j]);
            }
        }

        while (rottenStack.length !== 0 && freshFruit > 0) {
            const currentLevelSize = rottenStack.length;
            for (let k = 0; k < currentLevelSize; k++) {
                const rotten = rottenStack.shift();
                direction.forEach((dir) => {
                    const i = dir[0] + rotten[0];
                    const j = dir[1] + rotten[1];

                    if (i < MAX_ROW && j < MAX_COL && i >= 0 && j>= 0) {
                        const target = grid[i][j];

                        if (target === 1) {
                            freshFruit -= 1;
                            rottenStack.push([i,j]);
                            grid[i][j] = 2;
                        }
                    }
                });
            }
            minute += 1;
        }

        return freshFruit > 0 ? -1 : minute;
    }
}