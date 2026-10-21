class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s: string): boolean {
        let leftMin = 0;
        let leftMax = 0;

        for (const char of s) {
            if (char === "(") {
                leftMin++;
                leftMax++;
            } else if (char === ")") {
                leftMin--;
                leftMax--;
            } else {
                leftMin--;
                leftMax++;
            }

            if (leftMax < 0) return false;

            leftMin = Math.max(0, leftMin);
        }

        return leftMin === 0;
    }
}
