class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        
        const courseFromPre = new Map<number, number[]>();

        for (let i = 0; i < numCourses; i++)
            courseFromPre.set(i, []);
        
        for (const pre of prerequisites)
            courseFromPre.get(pre[0]).push(pre[1]);

        const visiting = new Set<number>();

        const dfs = (course: number): boolean => {
            if (visiting.has(course)) return false;

            if (courseFromPre.get(course).length === 0) return true;

            visiting.add(course);

            for (const pre of courseFromPre.get(course)) {
                if (!dfs(pre)) return false;
            }

            visiting.delete(course);
            courseFromPre.set(course, []);

            return true;
        }

        for (let i = 0; i < numCourses; i++)
            if (!dfs(i)) return false;

        return true;
    }
}
