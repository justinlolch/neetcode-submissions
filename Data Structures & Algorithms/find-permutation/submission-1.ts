class Solution {
    /**
     * @param {string} s
     * @return {number[]}
     */
    findPermutation(s: string): number[] {
        const stack = [];
        const ans = [];

        for (let i = 0; i <= s.length; i++) {
            stack.push(i+1);

            if (i === s.length || s[i] === "I") {
                while (stack.length > 0) {
                    ans.push(stack.pop());
                }
            }
        }
        
        return ans;
    }
}
