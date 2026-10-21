class Solution {
    private nodeEdges: Map<number, {target: number, prob: number}[]> = new Map();

    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(
        n: number,
        edges: number[][],
        succProb: number[],
        start_node: number,
        end_node: number,
    ) {
        this.initialiseNodeEdges(n);

        this.addAllEdges(edges, succProb);

        return this.findTheProb(start_node, end_node);
    }

    initialiseNodeEdges(n: number): void {
        for (let i = 0; i < n; i++) this.nodeEdges.set(i, []);
    }

    addAllEdges(edges: number[][], succProb: number[]): void {
        for (let i = 0; i < edges.length; i++) {
            const src = edges[i][0];
            const tar = edges[i][1];
            const prob = succProb[i];

            this.nodeEdges.get(src).push({target: tar, prob});
            this.nodeEdges.get(tar).push({target: src, prob});
        }
    }

    findTheProb(start_node: number, end_node: number): number {
        let ans: number = 0;

        const maxHeap = new MaxPriorityQueue(({target, prob}) => prob);

        for (const {target, prob} of this.nodeEdges.get(start_node)) 
            maxHeap.enqueue({target, prob});

        while (!maxHeap.isEmpty()) {
            const {target, prob} = maxHeap.dequeue();
            if (target === end_node)
                ans = Math.max(ans, prob);
            
            if (!this.nodeEdges.has(target)) continue;

            for (const edge of this.nodeEdges.get(target)) 
                maxHeap.enqueue({target: edge.target, prob: edge.prob * prob});
            
            this.nodeEdges.delete(target);
        }

        return ans;
    }
}
