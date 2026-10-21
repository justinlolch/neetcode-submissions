class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let curSum = arr[0], ans = 0;
        let L = 0;

        if (k === 1) {
            if (curSum / k >= threshold) ans += 1;
        }

        for (let R = L + 1; R < arr.length; R++) {
            curSum += arr[R];
            if ( R - L + 1 > k) {
                curSum -= arr[L];
                L++;
            } 
            
            if (R - L + 1 === k)            
                if (curSum  >= threshold * k)
                    ans += 1;
        }
        return ans;
    }
}