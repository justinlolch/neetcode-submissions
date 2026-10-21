class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets: number[][], target: number[]): boolean {
        const small = triplets.filter((e) => e[0] <= target[0] && e[1] <= target[1] && e[2] <= target[2]);
        if (small.length === 0) return false;

        const first = small[0];

        for (let i = 0; i < triplets.length; i++) {
            const cur = triplets[i];
            if (target[0] >= Math.max(first[0], cur[0]) && target[1] >= Math.max(first[1], cur[1]) && target[2] >= Math.max(first[2], cur[2])) {
            first[0] = Math.max(first[0], cur[0]);
            first[1] = Math.max(first[1], cur[1]);
            first[2] = Math.max(first[2], cur[2]);
            }
        }
        
        return first[0] === target[0] && first[1] === target[1] && first[2] === target[2];
    }
}
