class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings: string[]): string[][] {
        const map = new Map();

        for (const str of strings) {
            const diff = [];

            for (let i = 1; i < str.length; i++) {
                const current = str.charCodeAt(i);
                const previous = str.charCodeAt(i-1);

                const d = (current - previous + 26) % 26;

                diff.push(d);
            }

            const key = diff.join(",");

            if (map.has(key)) map.get(key).push(str);
            else map.set(key, [str]);
        }

        return [...map.values()];
    }
}
