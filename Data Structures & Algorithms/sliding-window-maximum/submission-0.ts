class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const maxHeap = new MaxPriorityQueue(({index, value}) => value);
        const ans = [];

        let l = 0, r = 0;

        while (r < nums.length) {
            maxHeap.enqueue({index: r, value: nums[r]});

            while (r - l + 1 > k) {
                while (maxHeap.front().index <= l) maxHeap.dequeue();
                l++;
            }

            if (r - l + 1 === k)
                ans.push(maxHeap.front().value);

            r++;
        }

        return ans;
    }
}
