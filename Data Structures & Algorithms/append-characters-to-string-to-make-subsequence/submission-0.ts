class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let sp = 0, tp = 0;

        while (sp < s.length) {
            if (s[sp] === t[tp]) {
                sp++;
                tp++;
            } else {
                sp++;
            }
        }

        return t.length - tp;
    }
}
