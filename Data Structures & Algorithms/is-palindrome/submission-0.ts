class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const trimmed = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let l = 0, r = trimmed.length - 1;

        while (l < r) {
            if (trimmed[l] === trimmed[r]) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }
}
