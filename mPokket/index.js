const listener = document.getElementById('main')
let count =1
function eventTriggered(e){
    console.log("hello")
   // console.log(count)
    count++
  //  console.log(e.target.parentNode)
 //   console.log(e.target.nodeType)
    console.log(e.target.lastChild)
}

listener.addEventListener('click',eventTriggered)