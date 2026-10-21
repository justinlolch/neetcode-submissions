class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums: number[]): string {
        nums.sort((a, b) => {
            const ab = `${a}${b}`;
            const ba = `${b}${a}`;

            console.log({ab, ba, a, b})

            return ba.localeCompare(ab);
        });

        const ans = nums.join("");
        return ans[0] === "0" ? "0" : ans;
    }
}
