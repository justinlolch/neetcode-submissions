class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    twoCitySchedCost(costs: number[][]): number {
        const aHeap = new MinPriorityQueue(({a,b,diff})=> diff);

        for (let i = 0; i < costs.length; i++) {
            aHeap.enqueue({
                a: costs[i][0],
                b: costs[i][1],
                diff: costs[i][0] - costs[i][1],
            });
        }

        let n = costs.length / 2;
        let count = 0;
        let cost = 0;

        while (aHeap.size() > 0) {
            if (count < n) {
                cost += aHeap.dequeue().a
                count++;
            }
            else cost += aHeap.dequeue().b
        }

        return cost;
    }
}
