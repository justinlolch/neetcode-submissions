class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s: string): string {
        const map = new Map();
        const maxHeap = new MaxPriorityQueue(({count})=>count);

        for (let i = 0; i < s.length; i++)
            map.set(s[i], (map.get(s[i]) ?? 0) + 1);

        for (const [key, values] of map){
            maxHeap.enqueue({char: key, count: values});
        }

        const ans = [];

        while (maxHeap.size() > 0) {
            const lastChar = ans[ans.length - 1];
            let next;
            if (lastChar === maxHeap.front().char) {
                const tmp = maxHeap.dequeue();
                if (maxHeap.size() === 0)
                    return "";
                else {
                    next = maxHeap.dequeue();
                    ans.push(next.char);
                    maxHeap.enqueue(tmp);
                }
            } else {
                next = maxHeap.dequeue();
                ans.push(next.char);
            }
            if (next.count - 1 > 0)
                maxHeap.enqueue({char: next.char, count: next.count - 1});
        }

        return ans.join("");
    }
}
