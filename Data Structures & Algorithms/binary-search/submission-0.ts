class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length;

        while (l <= r) {
            const m = Math.floor((r-l) / 2) + l;
            if (nums[m] === target) return m;
            else if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }

        return -1;
    }
}
