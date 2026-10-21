class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0, r = numbers.length - 1;

        while (true) {
            const sum = numbers[l] + numbers[r];
            if (sum === target)
                return [l+1, r+1];
            else if (sum < target)
                l++;
            else r--;
        } 
    }
}
