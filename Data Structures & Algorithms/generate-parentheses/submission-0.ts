class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const ans = [];
        const stack = [];

        const backtrack = (open: number, close: number) => {
            if (open === close && close === n) {
                ans.push([stack.join("")]);
                return;
            }

            if (open < n) {
                stack.push("(")
                backtrack(open + 1, close);
                stack.pop();
            }

            if (close < open) {
                stack.push(")")
                backtrack(open, close + 1);
                stack.pop();
            }
        }
        
        backtrack(0, 0);
        return ans;
    }
}
