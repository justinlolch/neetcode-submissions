class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const uf = new UnionFind(n);

        let count = n;

        for (const [n1, n2] of edges) 
            if (uf.union(n1, n2)) count--;

        return count;
    }
}

class UnionFind {
    private parent: Map<number, number> = new Map();
    private rank: Map<number, number> = new Map();

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parent.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(n: number): number {
        while (n !== this.parent.get(n)) {
            this.parent.set(n, this.parent.get(this.parent.get(n)));
            n = this.parent.get(n);
        }
        return n;
    }

    union(n1: number, n2: number): boolean {
        const [p1, p2] = [this.find(n1), this.find(n2)];

        if (p1 === p2) return false;

        if (this.rank.get(p1) > this.rank.get(p2))
            this.parent.set(p2, p1);
        else if (this.rank.get(p2) > this.rank.get(p1))
            this.parent.set(p1, p2);
        else {
            this.parent.set(p2, p1);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }

        return true;
    }
}