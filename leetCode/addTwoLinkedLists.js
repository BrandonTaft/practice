// const list = {
//     head: {
//         value: 6
//     }
//         next: {
//             value: 10
//         }                                             
//                 next: {
//                     value: 3
//                 }
//                     next: null	 
// };

class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
   
  class LinkedList{
    constructor(){
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
   
   
   
      append(value){
      const newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }
      else{
        this.tail.next = newNode;
        this.tail = newNode;
     }
      this.length++;
    }
   
    prepend(value){
     const node = new Node(value);
      
     node.next = this.head;
     this.head = node;
     this.length++;
  }
   
     insert(value,index){
      if(index >= this.length){
        this.append(value);
      }
      
      const node = new Node(value);
      
      const {prevNode,nextNode} = this.getPrevNextNodes(index);
      prevNode.next = node;
      node.next = nextNode;
      
      this.length++;
    }
    lookup(index){
      let counter = 0;
      let currentNode = this.head;
      while(counter < index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
   
    remove(index){
      let {previousNode,currentNode} = this.getNodes(index);
      previousNode.next = currentNode.next;
      this.length--;
  }
   let reverse =(){
      let previousNode = null;
      let currentNode = this.head;
  
      while(currentNode !== null){
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
  
      this.head = previousNode;
  }
  }
  
  let l1 = new LinkedList();
  l1.append(2);
  l1.append(4);
  l1.append(3);
  
  console.log(reverse(l1))
  //console.log(reverse())