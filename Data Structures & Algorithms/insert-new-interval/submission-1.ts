class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        if (intervals.length === 0) return [newInterval];

        const sort = [];    
        let inserted = false;

        for (const inter of intervals) {
            if (inserted) sort.push(inter);
            else {
                if (inter[0] >= newInterval[0]) {
                    sort.push(newInterval);
                    sort.push(inter);
                    inserted = true;
                } else {
                    sort.push(inter);
                }
            }
        }

        if (!inserted) sort.push(newInterval);

        // merge
        const ans = [sort[0]];

        for (let i = 1; i < sort.length; i++) {
            const lastEnd = ans[ans.length - 1][1];
            const cur = sort[i];

            if (lastEnd >= cur[0]) {
                const last = ans.pop();
                last[1] = Math.max(last[1], cur[1]);
                ans.push(last);
            } else {
                ans.push(cur);
            }
        }

        return ans;
    }
}
