class Solution {
    /**
     * @param {number[][]} board
     * @return {number[][]}
     */
    candyCrush(board: number[][]): number[][] {
        let crashable = this.findCrashable(board);
        
        while (crashable.size !== 0) {
            board = this.crushBoard(board, crashable);
            board = this.consolidateBoard(board);
            crashable = this.findCrashable(board);
        }

        return board;
    }

    findCrashable(board: number[][]): Set<string> {
        const crashable = new Set<string>();

        const verticalDirecitons = [[1,0],[-1,0]];
        const horizontalDirections = [[0,1],[0,-1]];

        for (let r = 0; r < board.length; r++)
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === 0)
                    continue;

                // find Horizontal
                const hCount = this.findNeighbours(board, r, c, board[r][c], new Set(), horizontalDirections);
                if (hCount >= 3) {
                    crashable.add(this.getKey(r,c));
                    continue;
                }

                // find Vertical
                const vCount = this.findNeighbours(board, r, c, board[r][c], new Set(), verticalDirecitons);
                if (vCount >= 3)
                    crashable.add(this.getKey(r,c));
            }

        return crashable;
    }

    findNeighbours(board: number[][], r: number, c: number, curValue: number, visited: Set<string>, directions: number[][]): number {
        if (this.isOutOfBound(r, c, board) || visited.has(this.getKey(r, c)) || curValue !== board[r][c]) return 0;

        visited.add(this.getKey(r,c));

        return 1 + directions.map(d => this.findNeighbours(board, r + d[0], c + d[1], curValue, visited, directions)).reduce((acc,cur) => acc+cur, 0);
    }

    crushBoard(board: number[][], crashable: Set<string>): number[][] {
        for (const b of crashable.values()) {
            const coor = this.getCoordinates(b);

            board[coor[0]][coor[1]] = 0;
        }

        return board;
    }

    consolidateBoard(board: number[][]): number[][] {
        const rows = board.length;
        const cols = board[0].length;

        for (let c = 0; c < cols; c++) {
            let writeRow = rows - 1;

            for (let r = rows - 1; r >= 0; r--) {
                if (board[r][c] !== 0) {
                    board[writeRow][c] = board[r][c];
                    writeRow--;
                }
            }

            let r = 0;
            while (r <= writeRow) {
                board[r][c] = 0;
                r++;
            }
        }

        return board;
    }

    isOutOfBound(r: number, c: number, board: number[][]) {
        return r < 0 || r >= board.length || c < 0 || c >= board[r].length;
    }

    getKey(r: number, c: number): string {
        return `${r}-${c}`;
    }

    getCoordinates(s: string): number[] {
        return s.split("-").map(e => parseInt(e));
    }
}
