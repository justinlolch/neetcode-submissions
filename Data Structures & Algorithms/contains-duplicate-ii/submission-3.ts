class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let L = 0, R = 1;
        if (k == 0) return false;

        while (true) {
            if (R >= nums.length) {
                L++;
                R = L + 1;
            }
            
            if (L >= nums.length - 1)
                return false;

            if (nums[L] === nums[R])
                return true;
            else if (Math.abs(L - R) == k) {
                L++;
                R = L + 1;
            } else {
                R++;
            }
        }
    }
}
