class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const n: number = nums.length;
        const target: number = Math.floor(n/3);
        const count: Map<number, number> = new Map();
        const result: Set<number> = new Set();

        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
            if (count.get(num) > target && !result.has(num))
                result.add(num);
        }

        return [...result];
    }
}
