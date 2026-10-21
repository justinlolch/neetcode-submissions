class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        const prefixProduct = [];
        const suffixProduct = [];

        let init = 1;
        for (let i = 0; i < nums.length; i++) {
            const product = init * nums[i]
            prefixProduct.push(product === 0 ? 0 : product);
            init = product === 0 ? 1 : product;
        } 

        init = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            const product = init * nums[i];
            suffixProduct.push(product === 0 ? 0 : product);
            init = product === 0 ? 1 : product;
        }

        return Math.max(...prefixProduct, ...suffixProduct);
    }
}
