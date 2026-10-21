class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixProduct = [];
        const postfixProduct = [];

        for (let i = 0; i < nums.length; i++) {
            let prev = 1
            if (prefixProduct.length > 0)
                prev = prefixProduct[i-1];
            prefixProduct.push(prev*nums[i]);
        }

        for (let i = nums.length-1; i >=0; i--){
            let prev = 1;
            if (postfixProduct.length > 0)
                prev = postfixProduct[0];
            postfixProduct.unshift(prev*nums[i]);
        }

        const result = [];
        for (let i = 0; i < nums.length; i++){
            const prefix = prefixProduct[i-1] ?? 1;
            const postfix = postfixProduct[i+1] ?? 1;
            result.push(prefix*postfix);
        }

        return result;
    }
}
