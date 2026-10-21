class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const edges = new Map<number, {target: number, time: number}[]>();

        for (let i = 1; i <= n; i++) edges.set(i, []);

        for (const time of times) {
            const [sr, tar, cost] = time;
            edges.get(sr).push({target: tar, time: cost});
        }

        const minHeap = new MinPriorityQueue(({target, cost}) => cost);
        const visited = new Set();
        minHeap.enqueue({target: k, cost: 0});
        let timeNeeded = 0;

        while (!minHeap.isEmpty()) {
            const {target, cost} = minHeap.dequeue();
            if (visited.has(target)) continue;
            visited.add(target);
            timeNeeded = cost;

            // add all paths
            for (const edge of edges.get(target))
                minHeap.enqueue({target: edge.target, cost: edge.time + cost});
        }

        return visited.size === n ? timeNeeded : -1;
    }
}
