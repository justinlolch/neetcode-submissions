class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        const lastIndexMap = new Map();

        for (let i = 0; i < S.length; i++)
            lastIndexMap.set(S[i], i);

        const ans = [];
        let cur = [];
        let curMax = 0;

        const isAbleToSplit = (index: number): boolean => {
            const curCharLastIndex = lastIndexMap.get(S[index]);
            if (curCharLastIndex > curMax) {
                curMax = curCharLastIndex;
            }
            return index >= curMax;
        }

        for (let i = 0; i < S.length; i++) {
            cur.push(S[i]);
            if (isAbleToSplit(i)){
                ans.push(cur.length);
                cur = [];
                curMax = i + 1;
            }
        }

        return ans;
    }
}
