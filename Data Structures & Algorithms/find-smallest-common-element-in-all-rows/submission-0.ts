class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat: number[][]): number {
        const map = new Map<number, Set<number>>();

        for (let i = 0; i < mat.length; i++) {
            const n = mat[i].length;
            const s = new Set<number>();
            for (let j = 0; j < n; j++)
                s.add(mat[i][j]);
            map.set(i, s);
        }

        for (let i = 0; i < mat[0].length; i++) {
            let isAllInRows = true;

            for (let j = 1; j < mat.length; j++) {
                if (!map.get(j).has(mat[0][i])) {
                    isAllInRows = false;
                    break;
                }
            }

            if (isAllInRows) return mat[0][i];
        }


        return -1;
    }
}
