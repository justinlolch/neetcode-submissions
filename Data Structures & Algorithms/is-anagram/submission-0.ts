class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const scount = new Map();
        const tcount = new Map();

        for (let i = 0; i < s.length; i++) {
            scount.set(s[i], (scount.get(s[i]) ?? 0) + 1);
            tcount.set(t[i], (tcount.get(t[i]) ?? 0) + 1);
        }

        for (const [key, values] of scount)
            if (scount.get(key) !== tcount.get(key)) return false;

        return true;
    }
}
