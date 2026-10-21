class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n: number): boolean {
        while ((n % 2 === 0 || n % 3 === 0 || n % 5 === 0) && n !== 1) {
            if (n % 5 === 0) n = n / 5;
            else if (n % 3 === 0) n = n / 3;
            else {
                n = n / 2;
            }
        } 

        return n === 1;
    }
}
