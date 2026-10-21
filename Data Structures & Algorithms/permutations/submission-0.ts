class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        if (nums.length === 0)
            return [[]];

        const perms = this.permute(nums.slice(1));
        const res = [];

        for (const p of perms) {
            for (let i = 0; i <= p.length; i++) {
                const clone = [...p];
                clone.splice(i, 0, nums[0]);
                res.push(clone);
            }
        } 
        return res;
    }
}
