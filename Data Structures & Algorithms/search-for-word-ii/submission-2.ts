class TrieNode {
    public children: Map<string, TrieNode>;
    public word: string | null;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.word = null;
    }
}

class Solution {
    private board: string[][] = [];
    private used: Set<string> = new Set();
    private rows = 0;
    private columns = 0;
    private directions: number[][] = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        this.board = board;
        this.used = new Set();
        this.rows = board.length;
        this.columns = board[0].length;

        const root = new TrieNode();
        const answer: string[] = [];

        for (const word of words) {
            let current = root;

            for (const char of word) {
                if (!current.children.has(char)) {
                    current.children.set(char, new TrieNode());
                }

                current = current.children.get(char)!;
            }

            current.word = word;
        }

        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.backtracking(row, column, root, answer);
            }
        }

        return answer;
    }

    backtracking(row: number, column: number, parent: TrieNode, answer: string[]): boolean {
        if (this.isOutOfBound(row, column)) {
            return;
        }

        const key = `${row}-${column}`;

        if (this.used.has(key)) {
            return;
        }

        const char = this.board[row][column];
        const current = parent.children.get(char);

        if (!current) {
            return;
        }

        this.used.add(key);

        if (current.word !== null) {
            answer.push(current.word);

            current.word = null;
        }

        for (const [rowDirection, columnDirection] of this.directions) {
            this.backtracking(row + rowDirection, column + columnDirection, current, answer);
        }

        this.used.delete(key);
    }

    isOutOfBound(i: number, j: number): boolean {
        return i < 0 || j < 0 || i >= this.rows || j >= this.columns;
    }
}
