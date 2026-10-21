class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const map = new Map();

        const visiting = new Set();
        const taken = new Set();

        for (let i = 0; i < numCourses; i++)
            map.set(i, []);
        
        for (const pre of prerequisites) {
            map.get(pre[0]).push(pre[1]);
        }

        const dfs = (c: number): boolean => {
            if (visiting.has(c)) return false;

            if (taken.has(c)) return true;

            const pre: number[] = map.get(c);

            visiting.add(c);

            for (const p of pre) {
                if (!dfs(p)) return false;
            }

            visiting.delete(c);
            taken.add(c);

            return true;
        }
       
        for (let i = 0; i < numCourses; i++)
            if (!dfs(i)) return false;

        return true;
    }
}
