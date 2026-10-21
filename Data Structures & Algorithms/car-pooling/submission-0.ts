class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips: number[][], capacity: number): boolean {
        const unCompletedTrips = new MinPriorityQueue(({numP, ori, to}) => ori);
        const activeTrips = new MinPriorityQueue(({numP, ori, to}) => to);

        for (const trip of trips)
            unCompletedTrips.enqueue({numP: trip[0], ori: trip[1], to: trip[2]});

        let rCapacity = capacity;

        while (unCompletedTrips.size() > 0) {
            const next = unCompletedTrips.dequeue();

            while (!activeTrips.isEmpty() && activeTrips.front().to <= next.ori) {
                const finishedTrip = activeTrips.dequeue();
                rCapacity += finishedTrip.numP;
            }
 
            if (rCapacity < next.numP) {
                return false;
            } else {
                rCapacity -= next.numP;
                activeTrips.enqueue(next);
            }
        }

        return true;
    }
}
