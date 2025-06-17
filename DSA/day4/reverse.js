const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function reverse(head){

    let curr= head
    let prev = null

    while(curr!==null){

        let next = curr.next
        curr.next = prev
        prev=curr
        curr=next.next

    }
    head=prev
    return head
}