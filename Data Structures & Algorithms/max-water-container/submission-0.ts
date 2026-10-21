class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0, r = heights.length - 1;
        let max = 0;

        while (l < r) {
            max = Math.max(max, Math.min(heights[l], heights[r]) * (r - l));
            if (heights[l] < heights[r])
                l++;
            else r--;
        }

        return max;
    }
}
