class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const ans = [];
        const stack = [];

        const backtrack = (i: number) => {
            if (i >= s.length) {
                ans.push([...stack]);
                return;
            }

            for (let j = i; j < s.length; j++) {
                if (this.isPalindrome(s, i, j)) {
                    stack.push(s.substring(i, j + 1));
                    backtrack(j+1);
                    stack.pop();
                }
            }
        }

        backtrack(0);

        return ans;
    }

    isPalindrome(s: string, l: number, r: number): boolean {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            
            l++;
            r--;
        }

        return true;
    }
}
