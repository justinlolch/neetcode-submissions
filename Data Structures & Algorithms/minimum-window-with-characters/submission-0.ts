class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const tc = new Map();
        const sc = new Map();

        for (let i = 0; i < t.length; i++)
            tc.set(t[i], (tc.get(t[i]) ?? 0) + 1);

        const isSubString = () => {
            for (const [key, values] of tc)
                if ((sc.get(key) ?? 0) < values) return false;
            return true;
        }

        let l = 0;
        let r = 0;
        let maxL = 0;
        let maxR = 0;
        let maxLength = Infinity;

        while (r < s.length) {
            sc.set(s[r], (sc.get(s[r]) ?? 0) + 1);

            while (isSubString()) {
                if (maxLength > (r - l + 1)) {
                    maxLength = r - l + 1;
                    maxL = l;
                    maxR = r;
                }
                sc.set(s[l], sc.get(s[l]) - 1);
                l++;
            }
            r++;
        }

        return maxLength === Infinity ? "" : s.slice(maxL, maxR + 1);
    }
}
