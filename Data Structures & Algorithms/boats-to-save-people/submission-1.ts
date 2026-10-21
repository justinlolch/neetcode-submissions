class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a,b)=>a-b);

        let l = 0, r = people.length - 1;
        let ans = 0;
        let cur = 0

        while (l <= r) {
            cur += people[r];
            r--;

            if (people[l] + cur <= limit && l <= r) {
                cur += people[l];
                l++;
            }

            ans += 1;
            cur = 0;
        }

        return ans;
    }
}
