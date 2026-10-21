class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    rearrangeString(s: string, k: number): string {
        const maxHeap = new MaxPriorityQueue(({count})=> count);
        const coolDownHeap = new MinPriorityQueue(({availableAt}) => availableAt);
        const count = new Map();

        for (const char of s) {
            count.set(char, (count.get(char) ?? 0) + 1);
        }

        for (const [key, values] of count) {
            maxHeap.enqueue({char: key, count: values});
        }

        const ans = [];
        
        for (let i = 0; i < s.length; i++) {
            while (coolDownHeap.size() > 0 && coolDownHeap.front().availableAt <= i) {
                const coolDown = coolDownHeap.dequeue();
                maxHeap.enqueue({char: coolDown.char, count: coolDown.count});
            }

            if (maxHeap.size() === 0) return "";

            const next = maxHeap.dequeue();
            ans.push(next.char);
            if (next.count - 1 > 0)
                coolDownHeap.enqueue({
                    char: next.char,
                    count: next.count - 1,
                    availableAt: i + k,
                })            
        }

        return ans.join("");
    }
}
