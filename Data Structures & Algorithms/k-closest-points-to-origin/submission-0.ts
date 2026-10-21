class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const minHeap = new MinPriorityQueue(({point, dis}) => dis);

        const distanceToOrigin = (x: number, y: number): number => Math.sqrt(Math.pow(x,2) + Math.pow(y,2))

        for (const point of points)
            minHeap.enqueue({point, dis: distanceToOrigin(point[0], point[1])});

        const ans = [];

        for (let i = 0; i < k; i++)
            ans.push(minHeap.dequeue().point);
        
        return ans;
    }
}
