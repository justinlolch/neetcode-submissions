class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const diff = gas.map((e, i)=> e - cost[i]);

        if (gas.length === 1 && diff[0] >= 0) return 0


        const maxHeap = new MaxPriorityQueue(({diff})=>diff);

        const isAbleToDoCircular = (i: number): boolean => {
            let cur = diff[i];
            for (let j = 1; j < gas.length; j++) {
                const next = (i + j) % gas.length;
                cur += diff[next];
                if (cur < 0)
                    return false;
                if (cur === 0 && j !== gas.length - 1)
                    return false;
            }

            return true;
        }

        for (let i = 0; i < diff.length; i++) {
            if (diff[i] > 0)
                maxHeap.enqueue({index: i, diff: diff[i]});
        }

        while (maxHeap.size() > 0) {
            const next = maxHeap.dequeue();
            if (isAbleToDoCircular(next.index))
                return next.index;
        }

        return -1;
    }
}
