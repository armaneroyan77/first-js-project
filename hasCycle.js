class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    if(!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }
    return false;
}

let a = new ListNode(4);
let b = new ListNode(2);
let c = new ListNode(9);
let d = new ListNode(10);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(hasCycle(a));