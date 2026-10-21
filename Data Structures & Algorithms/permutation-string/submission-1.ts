class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            const charCode = s1.charCodeAt(i) - 'a'.charCodeAt(0);
            s1Count[charCode] += 1;
        }

        let l = 0;
        let r = 0;

        const isSame = (): boolean => {
            return s1Count.every((count, i) => count === s2Count[i]);
        }

        while (r < s2.length) {
            const charCode = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2Count[charCode] += 1;

            if (r - l + 1 > s1.length) {
                const leftCharCode =
                    s2.charCodeAt(l) - 'a'.charCodeAt(0);

                s2Count[leftCharCode] -= 1;
                l++;
            }

            if (isSame()) return true;
            r++;
        }

        return false;
    }
}
