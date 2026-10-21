class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        
        for (const token of tokens) {
            if (token === "+")
                stack.push(stack.pop() + stack.pop());
            else if (token === "*")
                stack.push(stack.pop() * stack.pop());
            else if (token === "-") {
                const recent = stack.pop();
                stack.push(stack.pop() - recent);
            } else if (token === "/") {
                const recent = stack.pop();
                stack.push(Math.trunc(stack.pop() / recent));
            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}
