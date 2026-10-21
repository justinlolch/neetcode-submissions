class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const tsort: number[] = this.topSort(numCourses, prerequisites);
        return tsort.length === numCourses ? tsort : [];
    }

    topSort(n: number, edges: number[][]): number[] {
        const order: number[] = [];

        const visited = new Set<number>();
        const visiting = new Set<number>();

        const adj = new Map<number, number[]>();
        for (let i = 0; i < n; i++)
            adj.set(i, []);

        for (const [canTake, required] of edges)
            adj.get(required).push(canTake);

        for (let i = 0; i < n; i++) {
            if (!this.dfs(i, adj, order, visited, visiting)) {
                return [];
            }
        }

        order.reverse();
        return order;
    }

    dfs(src: number, adj: Map<number, number[]>, order: number[], visited: Set<number>, visiting: Set<number>): boolean {
        if (visiting.has(src)) return false;
        if (visited.has(src)) return true;

        visiting.add(src);

        for (const nei of adj.get(src)) {
            if (!this.dfs(nei, adj, order, visited, visiting)) return false;
        }

        visiting.delete(src);
        visited.add(src);
        order.push(src);
        return true;
    }
}