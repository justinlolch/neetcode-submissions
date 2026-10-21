class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s: string): number {
        const count = new Map();
        let ans = 0;
        let hasOdd = false;

        for (let i = 0; i < s.length; i++) {
            count.set(s[i], (count.get(s[i]) ?? 0) + 1);
        }

        for (const [key, values] of count) {
            if (values % 2 === 0) {
                ans += values;
            } else {
                ans += (values - 1);
                hasOdd = true;
            }
        }

        return hasOdd ? ans + 1 : ans;
    }
}