class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n: number, k: number): number[][] {
        const resultSet = [];
        
        const dfs = (i: number, curSet) => {
            if (curSet.length === k) {
                resultSet.push([...curSet]);
                return;
            } else if (i > n) {
                return;
            }

            curSet.push(i);
            dfs(i+1, curSet);
            curSet.pop();
            dfs(i+1, curSet);
        }

        dfs(1, []);

        return resultSet;
    }
}
