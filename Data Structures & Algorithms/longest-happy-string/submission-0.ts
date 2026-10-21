class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a: number, b: number, c: number): string {
        const maxHeap = new MaxPriorityQueue(({char, count})=>count);

        if (a > 0) maxHeap.enqueue({char: 'a', count: a});
        if (b > 0) maxHeap.enqueue({char: 'b', count: b});
        if (c > 0) maxHeap.enqueue({char: 'c', count: c});
        const ans = [];

        while (maxHeap.size() > 0) {
            const lastChar = ans[ans.length-1];
            const lastSecondChar = ans[ans.length-2];
            let next;
            
            if (maxHeap.front().char === lastChar && lastChar === lastSecondChar) {
                if (maxHeap.size() === 1)
                    break;
                else {
                    const tmp = maxHeap.dequeue();
                    next = maxHeap.dequeue();
                    maxHeap.enqueue(tmp);
                }
            } else {
                next = maxHeap.dequeue();
            }
            
            ans.push(next.char);
            if (next.count - 1 > 0)
                maxHeap.enqueue({char: next.char, count: next.count - 1});

        }

        return ans.join("");
    }
}
