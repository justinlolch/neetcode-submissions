class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const hash = new Map();
        hash.set(0, 1);

        let sum = 0;
        let ans = 0;
        for (const num of nums) {
            sum += num;
            const diff = sum - k;
            ans += hash.get(diff) ?? 0;
            hash.set(sum, (hash.get(sum) ?? 0) + 1);
        }

        return ans;
    }
}
