class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const edges = new Map<number, {target: number, cost: number}[]>();
        
        for (let i = 1; i <= n ; i++)
            edges.set(i, []);

        for (const time of times) {
            const [source, target, cost] = time;
            const curEdges = edges.get(source);
            curEdges.push({target, cost});
            edges.set(source, curEdges);
        }

        const minHeap = new MinPriorityQueue(({target, cost}) => cost);
        minHeap.enqueue({target: k, cost: 0});
        let timeNeeded;

        const visited = new Set();

        while (minHeap.size() > 0) {
            const {target, cost} = minHeap.dequeue();
            if (visited.has(target)) continue;
            visited.add(target);
            timeNeeded = cost;

            for (const edge of edges.get(target)) {
                minHeap.enqueue({target: edge.target, cost: edge.cost + cost});
            }
        }

        return visited.size === n ? timeNeeded : -1;
    }
}
