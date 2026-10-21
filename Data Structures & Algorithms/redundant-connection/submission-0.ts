class Solution {
    private par = new Map<number, number>();
    private rank = new Map<number, number>();

    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
    
        this.initialNode(n);

        for (const edge of edges) {
            const [n1, n2] = edge;
            if (!this.union(n1, n2)) return [n1, n2];
        }
    }

    initialNode(n: number): void {
        for (let i = 1; i <= n; i++) {
            this.par.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(node: number): number {
        let parent = this.par.get(node);

        while (parent !== this.par.get(parent)) {
            this.par.set(parent, this.par.get(this.par.get(parent)));
            parent = this.par.get(parent);
        }

        return parent;
    }

    union(n1: number, n2: number): boolean {
        const n1Parent = this.find(n1);
        const n2Parent = this.find(n2);

        if (n1Parent === n2Parent) return false;

        if (this.rank.get(n1Parent) > this.rank.get(n2Parent))
            this.par.set(n2Parent, n1Parent);
        else if (this.rank.get(n2Parent) > this.rank.get(n1Parent))
            this.par.set(n1Parent, n2Parent);
        else {
            this.par.set(n1Parent, n2Parent);
            this.rank.set(n2Parent, this.rank.get(n2Parent) + 1);
        }

        return true;
    }
}
