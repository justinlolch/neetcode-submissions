class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minSwaps(s: string): number {
        let closing = 0;
        let maxClose = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ']') closing++;
            else closing--;
            maxClose = Math.max(maxClose, closing)
        }

        return Math.ceil(maxClose / 2);
    }
}
