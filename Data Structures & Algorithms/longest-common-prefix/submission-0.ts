class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let pointer = 0;

        const max = Math.min(...strs.map(word => word.length));

        while (pointer < max) {
            if (strs.map(word => word[pointer]).every(char => char === strs[0][pointer])) pointer++;
            else break;
        }

        return strs[0].slice(0, pointer);
    }
}
