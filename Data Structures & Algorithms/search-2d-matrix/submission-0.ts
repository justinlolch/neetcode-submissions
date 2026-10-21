class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const flaten = matrix.flat();

        let l = 0, r = flaten.length - 1;

        while (l <= r) {
            const m = Math.floor((r + l) / 2);
            if (flaten[m] === target) return true
            else if (flaten[m] > target) r = m - 1;
            else l = m + 1;
        }

        return false;
    }
}
