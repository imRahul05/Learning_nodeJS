

//Stack


// browsing history 
// LIFO - Last in first Out

class stack{
    constructor(){
        this.items=[]
    }

    push(value){
     this.items.push(value)
    }


   pop(){
      if(this.items.isEmpty){
        return 'stack is empty'
      }
     this.items.pop()
   }

   isEmpty(){
     return this.items.length===0
   }

   peek(){
      if(!this.items.isEmpty){
        return this.items[this.items.length-1]
      }
   }
}