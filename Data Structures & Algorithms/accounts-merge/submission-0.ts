class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts: string[][]): string[][] {
        const n = accounts.length;

        const uf = new UnionFind(n);
        const emailToAccount = new Map<string, number>();

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            for (let j = 1; j < account.length; j++) {
                const email = account[j];
                if (emailToAccount.has(email)) {
                    uf.union(i, emailToAccount.get(email))
                } else {
                    emailToAccount.set(email, i);
                }
            }
        }

        const emailLeader = new Map<number, string[]>();
        for (const [email, accountId] of emailToAccount.entries()) {
            const leaderId = uf.find(accountId);
            if (emailLeader.has(leaderId)) emailLeader.get(leaderId).push(email);
            else emailLeader.set(leaderId, [email]);
        }

        const result: string[][] = [];
        for (const [accountId, emails] of emailLeader.entries()) {
            const row = [accounts[accountId][0], ...emails.sort()];
            result.push(row);
        }

        return result;
    }
}

class UnionFind {
    private parent = new Map<number, number>();
    private rank = new Map<number, number>();

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parent.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(node: number): number {
        while (node !== this.parent.get(node)) {
            this.parent.set(node, this.parent.get(this.parent.get(node)));
            node = this.parent.get(node);
        }
        return node;
    }

    union(n1: number, n2: number): boolean {
        const [p1, p2] = [this.find(n1), this.find(n2)];
        if (p1 === p2)
            return true;
        
        if (this.rank.get(p1) > this.rank.get(p2)) 
            this.parent.set(p2, p1);
        else if (this.rank.get(p2) > this.rank.get(p1))
            this.parent.set(p1, p2);
        else {
            this.parent.set(p2, p1);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }

        return false;
    }

}