class TreeNode {
    public char: string;
    public next: Map<string, TreeNode>;
    public isEndOfWord: boolean = false;

    constructor(char: string) {
        this.char = char;
        this.next = new Map();
    }
}

class WordDictionary {
    private head: TreeNode;

    constructor() {
        this.head = new TreeNode("dummy");
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.head;
        for (let i = 0; i < word.length; i++) {
            if (!cur.next.has(word[i])) 
                cur.next.set(word[i], new TreeNode(word[i]));
            cur = cur.next.get(word[i]);
        }
        cur.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.head;

        return this.searchRecursive(0, word, cur)
    }

    searchRecursive(i: number, word: string, cur: TreeNode): boolean {
        if (i === word.length) return cur.isEndOfWord;
        const char = word[i];
        
        if (char === ".") {
            return [...cur.next.values()].some(m => this.searchRecursive(i+1, word, m));
        } else {
            if (!cur.next.has(char)) return false;
            else return this.searchRecursive(i + 1, word, cur.next.get(char));
        }
    }
}
