class Solution {
    /**
     * @param {number[]} x
     * @param {number[]} y
     * @return {number}
     */
    maxSumDistinctTriplet(x: number[], y: number[]): number {
        const setX = new Set(Array.from(x));
        if (setX.size < 3) return -1;

        const yWithX = new Map();

        for (let i = 0; i < x.length; i++) {
            if (yWithX.has(x[i]) && y[i] < yWithX.get(x[i])) 
                continue;
            yWithX.set(x[i], y[i]);
        }
    
        return [...yWithX.values()].sort((a,b) => b-a).slice(0,3).reduce((acc,cur)=>acc+cur,0);
    }
}
