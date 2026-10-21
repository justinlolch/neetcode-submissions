class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;

        const edges = new Map<number, {target: number, distance: number}[]>();

        for (let i = 0; i < n; i++)
            edges.set(i, []);
        
        for (let i = 0; i < n; i++) {
            const p1 = [points[i][0], points[i][1]];
            for (let j = i + 1; j < n; j++) {
                const p2 = [points[j][0], points[j][1]];
                const distance = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
                edges.get(i).push({target: j, distance});
                edges.get(j).push({target: i, distance});
            }
        }

        let cost = 0;
        const minHeap = new MinPriorityQueue(({target, distance}) => distance);
        const visited = new Set<number>();
        minHeap.enqueue({target: 0, distance: 0});

        while (minHeap.size() > 0) {
            const {target, distance} = minHeap.dequeue();
            if (visited.has(target)) continue;
            visited.add(target);

            cost += distance;
            for (const edge of edges.get(target)) {
                minHeap.enqueue({target: edge.target, distance: edge.distance});
            }
        }

        return cost;
    }
}
