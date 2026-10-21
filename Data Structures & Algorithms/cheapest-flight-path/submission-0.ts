class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(
        n: number,
        flights: number[][],
        src: number,
        dst: number,
        k: number,
    ) {
        const edges = new Map<number, {dest: number, cost: number}[]>();

        for (let i = 0; i < n; i++)
            edges.set(i, []);

        for (const [s, d, c] of flights)
            edges.get(s).push({dest: d, cost: c});

        const maxFlights: number = k + 1;
        const dist: number[][] = Array.from({ length: n }, () => new Array(maxFlights + 1).fill(Infinity));

        dist[src][0] = 0;

        type State = {
            dest: number;
            cost: number;
            flightsUsed: number;
        }

        const minHeap = new MinPriorityQueue((state) => state.cost);

        minHeap.enqueue({dest: src, cost: 0, flightsUsed: 0});

        while (!minHeap.isEmpty()) {
            const {dest, cost, flightsUsed} = minHeap.dequeue();

            if (dest === dst) return cost;

            if (flightsUsed === maxFlights) continue;

            for (const {dest: d, cost: c} of edges.get(dest)) {
                const nextCost = c + cost;
                const nextFlights = flightsUsed + 1;

                if (nextCost < dist[d][nextFlights]) {
                    dist[dest][nextFlights] = nextCost;

                    minHeap.enqueue({
                        dest: d,
                        cost: nextCost,
                        flightsUsed: nextFlights
                    });
                }
            }

        }

        return -1;
    }
}
