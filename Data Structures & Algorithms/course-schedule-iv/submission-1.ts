class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(
        numCourses: number,
        prerequisites: number[][],
        queries: number[][],
    ) {
        const adj = Array.from({ length: numCourses }, () => new Set<number>());
        const indegree = new Array(numCourses).fill(0);
        const isPrereq = Array.from({ length: numCourses }, () => new Set<number>());

        for (const [req, canTake] of prerequisites) {
            adj[req].add(canTake);
            indegree[canTake] += 1;
        }

        const q = new Queue();
        for (let i = 0; i < numCourses; i++)
            if(indegree[i] === 0) q.push(i);

        while (!q.isEmpty()) {
            const node = q.pop();
            for (const nei of adj[node]) {
                isPrereq[nei].add(node);
                for (const it of isPrereq[node]) {
                    isPrereq[nei].add(it);
                }
                indegree[nei]--;
                if (indegree[nei] === 0) q.push(nei);
            }
        }
        
        return queries.map(([u, v]) => isPrereq[v].has(u));
    }
}
