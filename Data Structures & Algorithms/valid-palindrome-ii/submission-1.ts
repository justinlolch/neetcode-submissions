class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let l = 0, r = s.length - 1;

        const isPalindrome = (left: number, right: number): boolean => {
            while (left < right) {
                if (s[left] !== s[right])
                    return false;
                left++;
                right--;;
            }

            return true;
        }

        while (l < r) {
            if (s[l] !== s[r]) {
                return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
            }

            l++;
            r--;
        }
        

        return true;
    }
}
