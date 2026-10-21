class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(
        n: number,
        edges: number[][],
    ): number[][] {
        let indexedEdges: {n1: number, n2: number, weight: number, index: number}[] = edges.map((e, index) => {
            return {
                n1: e[0],
                n2: e[1],
                weight: e[2],
                index,
            }
        }).sort((a, b) => a.weight - b.weight);

        const uf = new UnionFind(n);
        let optimalWeight: number = 0;
        for (const {n1, n2, weight, index} of indexedEdges) {
            if (uf.union(n1, n2)) {
                optimalWeight += weight;

            }
        }

        const critical: number[] = [];
        const pseudo: number[] = [];

        for (const {n1, n2, weight, index: i} of indexedEdges) {
            // dont use create edge and build a union
            const ufWithout = new UnionFind(n);
            let withoutWeight: number = 0;
            for (const {n1: without_n1, n2: without_n2, weight: without_weight, index: j} of indexedEdges) {
                if (j !== i && ufWithout.union(without_n1, without_n2)) {
                    withoutWeight += without_weight;
                }
            }

            if (withoutWeight > optimalWeight || !ufWithout.isAllConnected()) {
                critical.push(i);
                continue;
            }

            // current is not critical -> see if it is a pseudo or not by using current edge first
            const ufWith = new UnionFind(n);
            ufWith.union(n1, n2);
            let withWeight: number = weight;
            for (const {n1: with_n1, n2: with_n2, weight: with_weight, index: j} of indexedEdges) {
                if (ufWith.union(with_n1, with_n2)) {
                    withWeight += with_weight;
                }
            }

            if (withWeight === optimalWeight) {
                pseudo.push(i);
            }

        }

        return [critical, pseudo];
    }
}

class UnionFind {
    private parent: Map<number, number> = new Map();
    private rank: Map<number, number> = new Map();
    components: number;

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.parent.set(i, i);
            this.rank.set(i, 0);
        }
        this.components = size;
    }

    find(node: number): number {
        while (node !== this.parent.get(node)) {
            this.parent.set(node, this.parent.get(this.parent.get(node)));
            node = this.parent.get(node);
        }
        
        return node;
    }

    union(n1: number, n2: number): boolean {
        const [p1, p2] = [this.find(n1), this.find(n2)];

        if (p1 === p2) return false;

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.parent.set(p2, p1);
        } else if (this.rank.get(p2) > this.rank.get(p1)) {
            this.parent.set(p1, p2);
        } else {
            this.parent.set(p2, p1);
            this.rank.set(p1, this.rank.get(p1) + 1);
        }

        this.components -= 1;
        return true;
    }

    isAllConnected(): boolean {
        return this.components === 1;
    }
}