class MyCalendar {
    private root: TreeNode;

    constructor() {
        this.root = null;
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime: number, endTime: number): boolean {
        if (this.root === null) {
            this.root = new TreeNode(startTime, endTime);
            return true;
        }

        return this.insert(this.root, startTime, endTime);
    }

    insert(node: TreeNode, startTime: number, endTime: number): boolean {
        if (endTime <= node.start) {
            if (!node.left) {
                node.left = new TreeNode(startTime, endTime);
                return true;
            }
            return this.insert(node.left, startTime, endTime);
        } else if (startTime >= node.end) {
            if (!node.right) {
                node.right = new TreeNode(startTime, endTime);
                return true;
            }
            return this.insert(node.right, startTime, endTime);
        } else {
            return false;
        }

    }
}

class TreeNode {
    public start: number;
    public end: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}