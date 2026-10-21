class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits.length === 0)
            return [];

        const map = new Map<string, string[]>([
            ["2", ["a", "b", "c"]],
            ["3", ["d", "e", "f"]],
            ["4", ["g", "h", "i"]],
            ["5", ["j", "k", "l"]],
            ["6", ["m", "n", "o"]],
            ["7", ["p", "q", "r", "s"]],
            ["8", ["t", "u", "v"]],
            ["9", ["w", "x", "y", "z"]],
        ]);

        const resultSet = [];

        const dfs = (i: number, curSet) => {
            if (i >= digits.length) {
                resultSet.push(curSet.join(""));
                return;
            }

            const chars = map.get(digits[i]);
            for (const char of chars) {
                curSet.push(char);
                dfs(i+1, curSet);
                curSet.pop();
            }
        }

        dfs(0, []);

        return resultSet;
    }
}
