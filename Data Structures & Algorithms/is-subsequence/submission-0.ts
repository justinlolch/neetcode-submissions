class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let sP = 0, tP = 0;

        while (tP < t.length) {
            if (s[sP] === t[tP]) {
                sP++;
                tP++;
            } else {
                tP++;
            }

            if (sP === s.length) return true;
        }

        return false;
    }
}
