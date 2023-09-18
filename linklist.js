class Node {
    constructor(data , next = null) {
        this.data = data 
        this.next = next
    }
}

//the result will be {data : 100 , next : null}

class Linkedlist {
    constructor() {
        // this.head is not an object , it is an array or list
        this.head = null 
        this.size = 0
    }

    // insert first node 
    insertFirst(data){
        // it insert in this.head a new value and point to the rest of this.head
        this.head = new Node(data , this.head)
        // result will be head : Node{ data : 200 , next : Node {data : 100 , next : null}}

        this.size++
    }

    // insert last node 
    insertLast(data) {
        // we put the data into a node
        let node = new Node(data)
        let current ;

        // if this.head (the node that you create) is empty , we will just add that node 
        if(!this.head) {
            this.head = node
        }
        else {
            // if there is a node already , we let current = this.head 
            current = this.head

            // this.head again is a array or list , that hold the node , the node include a data and a next 
            // if a next is having a value like this
            //Node{ data : 200 , next : Node {data : 100 , next : null}}

            while(current.next) {
                // if the this.head already have value , we put it to next
                current = current.next
            }

            current.next = node

            this.size++ 
        }
    }


// insert at index 
    insertAt(data , index) {
        // if index is out of range
        if(index < 0 || index > this.size) {
            // we not do anything
            return;
        }

        // if first index
        if (index === 0) {
            this.insertFirst(data)
            return;
        }

        const node  = new Node(data)
        let current , previous 

        // set current to first
        current = this.head
        let count = 0 ;

        while (count < index) {
            // it will loop until the count = index , after that , it will stop 

            previous = current ; // for node before
            count++
            // it will keep going to the current node until the count = index
            current = current.next // for node after
             
        }
        // we set the node = value when the loop end
        node.next = current
        previous.next =  node ;
        // previous            node          current
        // [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

        this.size++

    }

// get node at index of 
    getAt(index){
        let current = this.head
        let count = 0

        // we will keep looping until the count is equal to index , after done , we print the data

        while(current) {
            // it check the condition to exit the loop
            if((count == index)){
                console.log(current.data)
            }
            count++
            //head : Node{ data : 200 , next : Node {data : 100 , next : null}} 
            current = current.next
        }
        // if it is empty , we return null
        return null ;
    }

// remove node at index of 
    removeAt(index){
        if(index < 0 || index > this.size) {
            return ; // we return nothing
        }

        let current = this.head ;
        let previous ;
        let count = 0 

        // remove first 
        if(index === 0) {
            this.head = current.next
        }
        else {
            while(count < index){
                count++
                previous = current 
                current = current.next
            }

            //  this.head = current.next
            // [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null
            previous.next = current.next
        }

        this.size-- ;
    }

// clear the list
    clearList() {
        this.head = null
    }



    //print link list data
    printListData() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

}


// example 

const lujfy = new Linkedlist() 

lujfy.insertFirst(12)
lujfy.insertFirst(11)
lujfy.insertFirst(13)
lujfy.insertLast(14)
lujfy.insertAt(23 , 0)

lujfy.printListData() ;