class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map<number, number>();
        let max = 0;
        let maxAscii, maxCount = 0;
        let l = 0;

        for (let r = l; r < s.length; r++) {
            const ascii = s.charCodeAt(r);
            map.set(ascii, (map.get(ascii) ?? 0) + 1);
            for (let j = 0 ; j < 26; j++) {
                const count = map.get(j+65) ?? 0;
                if (count > maxCount) {
                    maxCount = count;
                    maxAscii = j+65;
                }
            }
            const occ = maxCount;
            while ((r-l+1 - occ) > k) {
                const leftAscii = s.charCodeAt(l);
                map.set(leftAscii, map.get(leftAscii) - 1);
                l++;
            }
            max = Math.max(max, r-l+1);
        }
        
        return max;
    }
}
