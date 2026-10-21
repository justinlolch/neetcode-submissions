class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = new Deque();
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let start = i;
            while (!stack.isEmpty() && stack.back().height > heights[i]) {
                // calcuate max area and popBack until the back is smaller than current height
                const {height, index} = stack.popBack();
                const width = i - index;
                maxArea = Math.max(maxArea, height * width);
                start = index;
            }

            stack.pushBack({height: heights[i], index: start});
        }

        while (!stack.isEmpty()) {
            const {height, index} = stack.popBack();
            const width = heights.length - index;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}