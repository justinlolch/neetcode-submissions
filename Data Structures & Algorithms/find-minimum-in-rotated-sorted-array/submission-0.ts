class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0, r = nums.length - 1;

        while (l < r) {
            const mid = Math.floor((l+r) / 2);
            
            if (nums[mid] > nums[r])
                l = mid + 1;
            else {
                r = mid;
            }
        }

        return nums[l];
    }
}
