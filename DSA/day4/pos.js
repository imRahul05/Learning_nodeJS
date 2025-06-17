const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtPosition(head, data, position){
   
    const newNode = new LinkedListNode(data)

    if(position===0){
        newNode.next =head
        return newNode
    }


    let pos=1
     let temp= head
    while(temp.next!==null){

        if(position===pos){
            newNode.next= temp.next
            temp.next=newNode
            return head
        }

        pos++
        temp=temp.next
    }
}