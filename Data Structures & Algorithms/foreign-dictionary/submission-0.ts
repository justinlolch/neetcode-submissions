class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const edges = new Map<string, Set<string>>();
        const indegree = new Map<string, number>();

        for (const word of words) {
            for (const char of word) {
                edges.set(char, new Set());
                indegree.set(char, 0);
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const [w1, w2] = [words[i], words[i+1]];
            if (w1.length > w2.length && w1.startsWith(w2)) return "";

            for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
                if (w1[j] !== w2[j]) {
                    if (!edges.get(w1[j]).has(w2[j])) {
                        edges.get(w1[j]).add(w2[j]);
                        indegree.set(w2[j], indegree.get(w2[j]) + 1);
                    }
                    break;
                }
            }
        }

        const queue = new Queue();
        for (const [char, count] of indegree.entries()) {
            if (count === 0)
                queue.push(char);
        }

        const res: string[] = [];
        while (!queue.isEmpty()) {
            const char = queue.pop();
            res.push(char);
            for (const nei of edges.get(char)) {
                indegree.set(nei, indegree.get(nei) - 1);
                if (indegree.get(nei) === 0)
                    queue.push(nei);
            }
        }

        if (res.length !== edges.size) return "";

        return res.join('');
    }
}
