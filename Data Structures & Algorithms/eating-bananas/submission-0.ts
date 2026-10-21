class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const sum = piles.reduce((acc,cur)=>acc+cur,0);

        const hoursNeededToFinsh = (speedPerHour: number): number => {
            let hours = 0;

            for (const pile of piles) 
                hours += Math.ceil(pile / speedPerHour);
            
            return hours;
        }

        let l = 1, r = sum;
        let minSpeed = Infinity;

        while (l <= r) {
            const mid = Math.floor((l+r) / 2);
            const hoursNeeded = hoursNeededToFinsh(mid);

            if (hoursNeeded <= h) {
                r = mid - 1;
                minSpeed = Math.min(minSpeed, mid);
            } else if (hoursNeeded > h)
                l = mid + 1;
            
            
        }

        return minSpeed;
    }
}
