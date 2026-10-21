class NumArray {
    private prefixSum = [0];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        let sum = 0;
        for (const num of nums) {
            sum += num;
            this.prefixSum.push(sum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}
