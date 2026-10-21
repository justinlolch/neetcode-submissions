class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=>a-b);

        const ans = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const cur = nums[i];
            const target = 0 - cur;
            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum === target) {
                    ans.push([cur, nums[l], nums[r]]);
                    do {l += 1;} while (nums[l] === nums[l-1]);
                    do {r -= 1;} while (nums[r] === nums[r+1]);
                }
                else if (sum > target) r -= 1;
                else if (sum < target) l += 1;
            }
        }

        return ans;
    }
}
