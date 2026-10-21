class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        const target = nums.length - 1;
        let ans = 0;
        let i = 0;
        
        while (i < target) {
            const maxSteps = nums[i];

            if (maxSteps + i >= target)
                return ans + 1;

            let maxReach = 0;
            let nextIndex = i;
            for (let j = i + 1; j <= i + maxSteps; j++) {
                const canReach = nums[j] + j;
                if (canReach > maxReach) {
                    maxReach = canReach;
                    nextIndex = j;
                }
            }

            i = nextIndex;
            ans += 1;
        }

        return ans;
    }
}
