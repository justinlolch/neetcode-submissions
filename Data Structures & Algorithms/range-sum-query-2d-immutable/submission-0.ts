class NumMatrix {
    private prefixSum: number[][] = [];
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        for (const row of matrix) {
            let sum = 0;
            const prefixSum = [0];
            for (const num of row) {
                sum += num;
                prefixSum.push(sum);
            }
            this.prefixSum.push(prefixSum);
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            sum += this.prefixSum[i][col2+1] - this.prefixSum[i][col1]; 
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
