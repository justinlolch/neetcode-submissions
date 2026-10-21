class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map();
        const maxHeap = new MaxPriorityQueue(({c})=>c);

        for (let i = 0; i < nums.length; i++)
            count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);

        for (const [key, values] of count)
            maxHeap.enqueue({key, c: values});
        
        const ans = [];

        while (k > 0) {
            ans.push(maxHeap.dequeue().key);
            k--;
        }        

        return ans;
    }
}
