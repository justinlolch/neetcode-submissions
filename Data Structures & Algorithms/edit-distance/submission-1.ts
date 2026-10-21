class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const memo = new Map();

        const dfs = (i1: number, i2: number): number => {
            if (i2 === word2.length && i1 === word1.length) return 0;
            if (i1 === word1.length) return word2.length - i2;
            if (i2 === word2.length) return word1.length - i1;

            const key = `${i1}-${i2}`;
            if (memo.has(key)) return memo.get(key);

            const w1 = word1[i1];
            const w2 = word2[i2];

            let min;

            if (w1 === w2) {
                min = dfs(i1+1, i2+1);
            } else {
                min = Math.min (
                    // insert
                    dfs(i1, i2+1),
                    // delete
                    dfs(i1+1, i2),
                    dfs(i1+1, i2+1)
                ) + 1;
            }

            memo.set(key, min);

            return min;
        }

        return dfs(0, 0);
    }
}
