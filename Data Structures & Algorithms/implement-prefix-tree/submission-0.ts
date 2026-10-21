class TreeNode {
    public char: string;
    public next: Map<string, TreeNode>;
    public isEndOfWord: boolean;

    constructor(c: string, isEndOfWord?: boolean) {
        this.char = c;
        const charMap = new Map();
        this.next = charMap;
        this.isEndOfWord = isEndOfWord === true ? true : false;
    }
}

class PrefixTree {
    private head: TreeNode;

    constructor() {
        this.head = new TreeNode("dummy");
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.head;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!cur.next.has(char))
                cur.next.set(char, new TreeNode(char));
            cur = cur.next.get(char);
        }

        cur.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.head;
        for (let i = 0; i < word.length; i++) {
            if (cur.next.has(word[i]))
                cur = cur.next.get(word[i])
            else return false;
        }

        return cur.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.head;
        for (let i = 0; i < prefix.length; i++) {
            if (cur.next.has(prefix[i]))
                cur = cur.next.get(prefix[i])
            else return false;
        }

        return true;
    }
}
