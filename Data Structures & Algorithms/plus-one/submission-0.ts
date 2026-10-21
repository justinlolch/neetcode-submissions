class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let plusTen: boolean = false;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (plusTen || i === digits.length - 1) {
                digits[i] = digits[i] + 1;
                plusTen = false;
            }

            if (digits[i] >= 10) {
                digits[i] %= 10;
                plusTen = true;
            }
        }

        if (plusTen) digits.unshift(1);

        return digits;
    }
}
