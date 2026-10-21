class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a,b)=> a[0] - b[0]);
        const ans = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const lastEnd = ans[ans.length - 1][1];
            const curStart = intervals[i][0];
            const curEnd = intervals[i][1];

            if (lastEnd >= curStart) {
                const last = ans.pop();
                last[1] = Math.max(last[1], curEnd);
                ans.push(last);
            } else ans.push(intervals[i]);

        }
        
        return ans;
    }
}
