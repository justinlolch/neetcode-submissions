class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums: number[]): number {
        const count = new Map();

        for (const num of nums)
            count.set(num, (count.get(num) ?? 0) + 1);

        let action = 0;
        for (const values of count.values()) {
            if (values === 1)
                return -1;

            action += (values % 3 === 0) ? values / 3 : Math.ceil(values / 3);
        }

        return action;
    }
}
