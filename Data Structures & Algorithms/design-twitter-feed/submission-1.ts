class Twitter {
    private tweetMap: Map<number, {tweetId: number, time: number}[]>;
    private followingMap: Map<number, Set<number>>;
    private time: number = 0;

    constructor() {
        this.tweetMap = new Map();
        this.followingMap = new Map();
    }

    getNextTimestamp(): number {
        const cur = this.time;
        this.time += 1;
        return cur;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        let tweetList: {tweetId: number, time: number}[];
        if (this.tweetMap.has(userId)) tweetList = this.tweetMap.get(userId);
        else tweetList = [];

        const t = {tweetId, time: this.getNextTimestamp()};
        tweetList.push(t);
        this.tweetMap.set(userId, tweetList);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        let userList = new Set([userId]);
        if (this.followingMap.has(userId)) {
            const followingSet: Set<number> = this.followingMap.get(userId);
            for (const user of followingSet.values())
                userList.add(user);
        } 

        const minHeap = new MinPriorityQueue(({tweetId, time})=>time);
        // get tweets
        for (const user of userList.values()) {
            if (this.tweetMap.has(user)) {
                const tweetList = this.tweetMap.get(user);
                const max10EachUser = Math.max(0, tweetList.length - 11);
                for (let i = tweetList.length - 1; i >= max10EachUser; i--)
                    minHeap.enqueue(tweetList[i]);
            }
        }

        while (minHeap.size() > 10) minHeap.dequeue();

        return minHeap.toArray().map(e => e.tweetId).reverse();
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        let followingSet;
        if (this.followingMap.has(followerId))
            followingSet = this.followingMap.get(followerId);
        else followingSet = new Set();
        followingSet.add(followeeId);
        this.followingMap.set(followerId, followingSet);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        if (this.followingMap.has(followerId)) {
            const followingSet: Set<number> = this.followingMap.get(followerId)!;
            followingSet.delete(followeeId);
            this.followingMap.set(followerId, followingSet);
        }
    }
}
