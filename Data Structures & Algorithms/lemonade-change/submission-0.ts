class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills: number[]): boolean {
        const cost: number = 5;
        let change5 = 0, change10 = 0;
        for (let i = 0; i < bills.length; i++) {
            if (bills[i] === 5)
                change5 += 1;
            else if (bills[i] === 10) {
                if (change5 === 0)
                    return false;
                
                change5 -= 1;
                change10 += 1;
            } else {
                if (change5 >= 1 && change10 > 0) {
                    change5 -=1;
                    change10 -=1;
                } else if (change10 === 0 && change5 >= 3) {
                    change5 -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
