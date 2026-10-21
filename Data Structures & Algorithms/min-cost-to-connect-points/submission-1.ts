class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;

        const uf = new UnionFind(n);

        const minHeap = new MinPriorityQueue(({n1, n2, distance}) => distance);

        for (let i = 0; i < n; i++) {
            const p1 = [points[i][0], points[i][1]];
            for (let j = i + 1; j < n; j++) {
                const p2 = [points[j][0], points[j][1]];
                const cost = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
                minHeap.enqueue({n1: i, n2: j, distance: cost});
            }
        }

        let cost = 0;
        let edgesUsed = 0;

        while (edgesUsed < n - 1) {
            const {n1, n2, distance} = minHeap.dequeue();
            if (uf.union(n1, n2)) {
                cost += distance;
                edgesUsed++;
            }
        }

        return cost;
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

    find(node: number): number {
        while (node !== this.parent.get(node)) {
            this.parent.set(node, this.parent.get(this.parent.get(node)));
            node = this.parent.get(node);
        }

        return node;
    }

    union(n1: number, n2: number): boolean {
        const [p1, p2] = [this.find(n1), this.find(n2)];

        // parent same = already connected
        if (p1 === p2) return false;

        if (this.rank.get(p1) > this.rank.get(p2))
            this.parent.set(p2, p1);
        else if (this.rank.get(p2) > this.rank.get(p1))
            this.parent.set(p1, p2);
        else {
            this.parent.set(p2, p1);
            this.rank.set(p1, this.rank.get(p1) + 1);
        }

        return true;
    }

}