class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums: number[], k: number): number {
        let sum = nums.reduce((acc,cur)=>acc+cur,0);

        let l = Math.floor(sum/k), r = sum;
        let res = r;

        const isValid = (target: number): boolean => {
            let count = 0;
            let cur = 0;

            for (let i = 0; i < nums.length; i++) {
                if(cur + nums[i] <= target) {
                    cur += nums[i];
                } else if (nums[i] > target) return false
                else {
                    count += 1;
                    cur = nums[i];
                }
            } 
            
            return count + 1 <= k;
        }

        while (l <= r) {
            const m = (l+r) >> 1;
            if (isValid(m)) {
                r = m - 1;
                res = m;
            } else {
                l = m + 1;
            }
        }

        return res;
    }
}
