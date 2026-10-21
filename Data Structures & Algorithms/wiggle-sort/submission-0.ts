class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    wiggleSort(nums: number[]): void {
        const sorted = [...nums].sort((a,b)=>a-b);
    
        let l = 0, r = sorted.length - 1;

        let i = 0;
        while (l < r) {
            nums[i] = sorted[l];
            i++;
            nums[i] = sorted[r];
            i++;
            l++;
            r--;
        }
    }
}
