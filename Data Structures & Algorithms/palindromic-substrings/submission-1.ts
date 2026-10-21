class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let ans = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length
            let left = i, right = i;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                ans += 1;
                left -= 1;
                right += 1;
            }

            // even length
            left = i, right = i+1;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                ans += 1;
                left -= 1;
                right += 1;
            }
        }

        return ans;
    }
}
