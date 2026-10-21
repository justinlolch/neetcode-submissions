class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const total = nums1.length + nums2.length;
        const half = Math.floor((total + 1) / 2);
        
        if (nums2.length < nums1.length)
            [nums1, nums2] = [nums2, nums1];

        let l = 0;
        let r = nums1.length;

        while (l <= r) {
            const i = Math.floor((l+r) / 2);
            const j = half - i;

            const nums1left = i > 0 ? nums1[i-1] : -Infinity;
            const nums1right = i < nums1.length ? nums1[i] : Infinity;
            const nums2left = j > 0 ? nums2[j-1] : -Infinity;
            const nums2right = j < nums2.length ? nums2[j] : Infinity;
        
            if (nums1left <= nums2right && nums2left <= nums1right)
                return total % 2 !== 0 ? Math.max(nums1left, nums2left) : (Math.max(nums1left, nums2left) + Math.min(nums1right, nums2right)) / 2;
            else if (nums1left > nums2right)
                r = i - 1;
            else
                l = i + 1;
        }

        return -1;
    }
}