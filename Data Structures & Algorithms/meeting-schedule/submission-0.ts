/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        if (intervals.length === 0) return true; 
        intervals.sort((a,b)=>a.start-b.start);
        const cur = intervals[0];
        let curStart = cur.start;
        let curEnd = cur.end;

        for (let i = 1; i < intervals.length; i++) {
            const nextStart = intervals[i].start;
            const nextEnd = intervals[i].end;

            if (curEnd > nextStart) return false;
            
            curStart = Math.min(nextStart, curStart);
            curEnd = Math.max(nextEnd, curEnd);
        }

        return true;
    }
}
