class TicTacToe {
    private board: Map<string, number>;
    private n: number;
    private positiveDirections = [
        [-1, 1],
        [1, -1]
    ];

    private negativeDirections = [
        [-1, -1],
        [1, 1]
    ]
    /**
     * @param {number} n
     */
    constructor(n: number) {
        this.board = new Map<string, number>();
        this.n = n;
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {number} player
     * @return {number}
     */
    move(row: number, col: number, player: number): number {
        const key = `${row}-${col}`;
        this.board.set(key, player);

        return (this.getVerticalWin(col, player) || this.getHorizontalWin(row, player) || this.getDiagonalWin(row, col, player)) ? player : 0;
    }

    isOutOfBound(row: number, col: number): boolean {
        return row >= this.n || col >= this.n || row < 0 || col < 0; 
    }

    getDiagonalList(row: number, col: number, directions: number[][]): string[] {
        const list = [`${row}-${col}`];
        
        for (let i = 1; i < this.n; i++) {
            for (const dir of directions) {
                const nr = row + dir[0] * i;
                const nc = col + dir[1] * i;
                if (!this.isOutOfBound(row+dir[0], col+dir[1]))
                    list.push(`${nr}-${nc}`);
            }
        }

        return list;
    }

    getDiagonalWin(row: number, col: number, player: number): boolean {
        const positive = this.getDiagonalList(row, col, this.positiveDirections);
        const negative = this.getDiagonalList(row, col, this.negativeDirections);

        return this.getDiagonalByPlayerWin(positive, player) || this.getDiagonalByPlayerWin(negative, player);
    }

    getDiagonalByPlayerWin(list: string[], player: number): boolean {
        let count = 0;
        for (const e of list) {
            if (this.board.has(e) && this.board.get(e) === player)
                count+=1;
        }
        return count === this.n;
    }

    getVerticalWin(col: number, player: number): boolean {
        let count = 0;
        for (let i = 0; i < this.n; i++) {
            const key = `${i}-${col}`;
            if (this.board.has(key) && this.board.get(key) === player)
                count+=1;
        }
        return count === this.n;
    }

    getHorizontalWin(row: number, player: number): boolean {
        let count = 0;
        for (let i = 0; i < this.n; i++) {
            const key = `${row}-${i}`;
            if (this.board.has(key) && this.board.get(key) === player)
                count+=1;
        }
        return count === this.n;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row, col, player)
 */
