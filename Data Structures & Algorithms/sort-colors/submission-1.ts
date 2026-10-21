class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let l = 0, r = nums.length - 1, mid = 0;

        while (mid <= r) {
            const cur = nums[mid];

            if (cur === 0) {
                this.swap(l, mid, nums);
                l++;
                mid++;
            } else if (cur === 2) {
                this.swap(mid, r, nums);
                r--;
            } else {
                mid++;
            }
        }

    }

    swap(i: number, j: number, nums: number[]): void {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
