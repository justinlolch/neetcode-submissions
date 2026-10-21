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
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if (intervals.length === 0) return 0;

        let cur = 0;
        let max = 0;

        const timeStart = [];
        const timeEnd = [];

        for (const interval of intervals) {
            timeStart.push(interval.start);
            timeEnd.push(interval.end);
        }

        timeStart.sort((a,b)=>a-b);
        timeEnd.sort((a,b)=>a-b);

        let startP = 0, endP = 0;

        while (startP < timeStart.length) {
            if (timeStart[startP] < timeEnd[endP]) {
                cur+=1;
                max = Math.max(max, cur);
                startP++;
            } else {
                cur--;
                endP+=1;
            }
        }

        return max;
    }
}
