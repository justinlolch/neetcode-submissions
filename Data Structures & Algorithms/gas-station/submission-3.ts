class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        if (cost.reduce((acc,cur)=>acc+cur,0) > gas.reduce((acc,cur)=>acc+cur,0))
            return -1;

        let total = 0;
        let res = 0;
        for(let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];

            if (total < 0) {
                total = 0
                res = i + 1;
            }
        }

        return res;
    }
}
