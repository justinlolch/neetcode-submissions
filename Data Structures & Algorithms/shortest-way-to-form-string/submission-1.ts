class Solution {
    /**
     * @param {string} source
     * @param {string} target
     * @return {number}
     */
    shortestWay(source: string, target: string): number {
        const sourceSet = new Set([...source]);

        for (const char of target) {
            if (!sourceSet.has(char)) return -1;
        }

        let targetP = 0, sourceP = 0;
        let times = 0;

        while (targetP < target.length) {
            if (target[targetP] === source[sourceP]) {
                targetP++;
            }
            sourceP++;

            if (sourceP === source.length) {
                times += 1;
                sourceP = 0;
            }
        }

        if (sourceP !== 0) times += 1;

        return times;
    }
}