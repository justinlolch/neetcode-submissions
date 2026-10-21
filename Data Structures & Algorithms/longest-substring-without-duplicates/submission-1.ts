class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set();
        let left = 0;
        let curMax = set.size;

        for (let right = left; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            curMax = Math.max(curMax, set.size);
        }

        return curMax;
    }
}
