class TimeMap {
    private keyStore;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key))
            this.keyStore.set(key, [{value, timestamp}]);
        else {
            const cur = this.keyStore.get(key);
            this.keyStore.set(key, [...cur, {value, timestamp}]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) return "";

        const values = this.keyStore.get(key);
        let l = 0, r = values.length - 1;
        let answer = "";

        while (l <= r) {
            const mid = Math.floor((l+r)/2);

            if (values[mid].timestamp <= timestamp) {
                answer = values[mid].value;
                l = mid + 1;
            } else
                r = mid - 1;
        } 

        return answer;
    }
}
