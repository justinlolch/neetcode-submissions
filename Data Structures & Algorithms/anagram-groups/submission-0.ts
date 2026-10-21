class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const cur = strs[i];
            const sorted = [...strs[i]].sort().join("");

            if (map.has(sorted))
                map.set(sorted, [...map.get(sorted), cur]);
            else map.set(sorted, [cur]);
        }

        const ans = [];
        for (const values of map.values()) {
            ans.push(values);
        }

        return ans;
    }
}
