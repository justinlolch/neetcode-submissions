class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const directions: number[][] = [
            [0,1],
            [0,-1],
            [1,0],
            [-1,0],
        ];

        const minHeap = new MinPriorityQueue(({coordinate, height}: {coordinate: number[], height: number}) => height);
        const visited = new Set<string>();

        const cKey = (i: number, j: number): string => `${i}-${j}`;    
    
        const isOutOfBound = (i: number, j: number): boolean => i < 0 || j < 0 || i >= grid.length || j >= grid[0].length;

        minHeap.enqueue({coordinate: [0,0], height: grid[0][0]});

        let maxTime = 0;

        while (!visited.has(cKey(grid.length - 1, grid[0].length - 1))) {
            const {coordinate, height} = minHeap.dequeue();
            const key = cKey(coordinate[0], coordinate[1]);

            visited.add(key);
            maxTime = Math.max(maxTime, height);

            directions.forEach(d => {
                const ni = coordinate[0] + d[0];
                const nj = coordinate[1] + d[1];
                if (!isOutOfBound(ni, nj) && !visited.has(cKey(ni, nj))) minHeap.enqueue({coordinate: [ni, nj], height: grid[ni][nj]});
            })
        }

        return maxTime;
    }
}
