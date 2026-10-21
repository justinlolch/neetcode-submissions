class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let lp = 0, rp = height.length - 1;
        let leftMax = height[lp], rightMax = height[rp];
        let trapped = 0;

        while (lp < rp) {
            if (leftMax < rightMax) {
                lp++;
                leftMax = Math.max(leftMax, height[lp])
                trapped += (leftMax - height[lp])
            } else {
                rp--;
                rightMax = Math.max(rightMax, height[rp])
                trapped += (rightMax - height[rp])
            }
        }

        return trapped;
    }
}
