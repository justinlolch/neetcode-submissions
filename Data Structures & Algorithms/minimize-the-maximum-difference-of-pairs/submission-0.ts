class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums: number[], p: number): number {
        nums.sort((a,b)=>a-b);

        let l = 0, r = 1000000000;
        let res = 1000000000;

        const isValid = (threshold: number): boolean => {
            let i = 0;
            let count = 0;
            while (i < nums.length - 1){
                const diff = Math.abs(nums[i] - nums[i+1]);
                if (diff <= threshold) {
                    count++;
                    i+=2;
                } else i+=1;

                if (count === p) 
                    return true;
            }
            return false;
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
