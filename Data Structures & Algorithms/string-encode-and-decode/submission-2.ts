class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = "";

        for (const str of strs) {
            const length = str.length;
            const separator = "#";
            encoded += length + separator + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            const delimiter = str.indexOf('#', i);
            const len = parseInt(str.slice(i, delimiter), 10);
            const word = str.slice(delimiter + 1, len + delimiter + 1);
            decoded.push(word);
            i = delimiter + 1 + len;
        }

        return decoded;
    }
}
