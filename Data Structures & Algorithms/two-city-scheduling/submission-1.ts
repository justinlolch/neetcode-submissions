class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    twoCitySchedCost(costs: number[][]): number {
        const target = costs.length / 2;
        const memo = new Map();

        const dfs = (i, aSum, bSum) => {
            const key = `${i}-${aSum}-${bSum}`

            if (memo.has(key)) return memo.get(key);

            if (i >= costs.length)
                return 0;
            
            let min;

            if (aSum === target)
                min = dfs(i+1, aSum, bSum + 1) + costs[i][1];
            else if (bSum === target)
                min = dfs(i+1, aSum + 1, bSum) + costs[i][0];
            else 
                min = Math.min(
                    dfs(i+1, aSum, bSum + 1) + costs[i][1],
                    dfs(i+1, aSum + 1, bSum) + costs[i][0]
                );

            memo.set(key, min);

            return min;
        }
        
        return dfs(0,0,0);
    }
}
