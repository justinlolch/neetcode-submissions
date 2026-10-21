class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture: string[][]): number {
        const br = new Map<number, number>();
        const bc = new Map<number, number>();

        let ans: number = 0;

        for (let r = 0; r < picture.length; r++)
            for (let c = 0; c < picture[r].length; c++)
                if (picture[r][c] === "B") {
                    br.set(r, (br.get(r) ?? 0) + 1);
                    bc.set(c, (bc.get(c) ?? 0) + 1);
                }

        for (let r = 0; r < picture.length; r++)
            for (let c = 0; c < picture[r].length; c++)
                if (picture[r][c] === "B" && br.get(r) === 1 && bc.get(c) === 1) ans++; 

        return ans;
    }   
}
