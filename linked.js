//JS implementation of linked lists using the concept of nodes

function LLNode(data) {
    this.data = data;
    this.next = null;   
}

var head = new LLNode(4);
head.next = new LLNode(6);
head.next.next = new LLNode(8);
head.next.next.next = new LLNode(10);
head.next.next.next.next = new LLNode(10);

//Searching Linked Lists

function searchLL(head, item) {
    var temp = head;
    while (temp !== null) {
        if (temp.data === item) {
            return true;
        }
        temp = temp.next;
    }
    return false;
    
}

// returns the number of elements in LL

function numberLL(head, item) {
    var count = 0;
    var temp = head;
    while (temp !== null) {
        if (temp.data === item) {
            count += 1;            
        }
        temp = temp.next;
    }
    return count;
}

