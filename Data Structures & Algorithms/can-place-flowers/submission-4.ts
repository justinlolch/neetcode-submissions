class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        if (n <= 0) return true;
        let prev = 0, next = flowerbed[1] ?? 0;

        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] === 0 && prev === 0 && next === 0) {
                flowerbed[i] = 1;
                n--;
            }

            if (n <= 0) return true;

            prev = flowerbed[i];
            next = flowerbed[i+2] ?? 0;
        }

        return false;
    }
}
