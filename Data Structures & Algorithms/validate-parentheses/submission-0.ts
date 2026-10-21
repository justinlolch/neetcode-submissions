class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (const sym of s) {
            if (sym === "(" || sym === "{" || sym === "[") {
                stack.push(sym);
                continue;
            }
            else if (sym === ")" && stack[stack.length - 1] !== "(") return false;
            else if (sym === "}" && stack[stack.length - 1] !== "{") return false;
            else if (sym === "]" && stack[stack.length - 1] !== "[") return false;

            stack.pop();
        }

        return stack.length === 0;
    }
}
