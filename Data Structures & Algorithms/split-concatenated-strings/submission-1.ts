class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    splitLoopedString(strs: string[]): string {
        
        for (let i = 0; i < strs.length; i++) {
            const rev = strs[i].split('').reverse().join('');
            if (rev > strs[i]) strs[i] = rev;
        }

        let res = '';

        for (let i = 0; i < strs.length; i++) {
            const rev = strs[i].split('').reverse().join('');

            const other = strs.slice(i+1).join('') + strs.slice(0, i).join('');

            for (const s of [strs[i], rev]) {
                for (let j = 0; j < s.length; j++) {
                    const candidate = s.substring(j) + other + s.substring(0, j);
                    if (candidate > res) res = candidate;
                }
            }
        }

        return res;
    }
}
