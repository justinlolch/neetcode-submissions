class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s: string): number {
        const map = new Map();
        let max = -1;

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                const index = map.get(s[i]);
                max = Math.max(max, i - index - 1);
            }
            else {
                map.set(s[i], i);
            }
                
        }   

        return max;
    }
}
