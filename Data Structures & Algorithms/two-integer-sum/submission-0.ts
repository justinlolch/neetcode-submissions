class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const k = target - nums[i];
            if (map.has(k)) return [map.get(k), i];
            else map.set(nums[i], i);
        }        
    }
}
