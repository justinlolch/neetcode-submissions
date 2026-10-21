class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a,b) => a[0] - b[0]);
        let curEnd = intervals[0][1];
        let ans = 0;

        for (let i = 1; i < intervals.length; i++) {
            const nextStart = intervals[i][0];
            const nextEnd = intervals[i][1];

            if (curEnd > nextStart) {
                ans += 1; 

                curEnd = Math.min(curEnd, nextEnd);
            } else {
                curEnd = nextEnd;
            }
        }

        return ans;
    }
}
