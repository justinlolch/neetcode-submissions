class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let curSum = 0;
        let min = Infinity;
        let L = 0;

        if (nums.length === 1 && nums[0] >= target)
            return 1;

        for (let R = L; R < nums.length; R++) {
            curSum += nums[R];
            while (L <= R && curSum >= target) {
                min = Math.min(min, R-L+1);
                curSum -= nums[L];
                L++;
            }
        }

        return min === Infinity ? 0 : min;
    }
}
