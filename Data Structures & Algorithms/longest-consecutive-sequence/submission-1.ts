class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let max = 0;
        let count = 1;

        for (const num of nums) {
            let cur = num;
            if (set.has(cur - 1)) continue;

            while (set.has(cur + 1)) {
                count += 1;
                cur += 1;
            }

            max = Math.max(count, max);
            count = 1;
        }

        return max;
    }
}
