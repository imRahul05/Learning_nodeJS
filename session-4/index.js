let allPosts=[]

const container = document.getElementById('container')
const loader = document.getElementById('loader')

let limit=10
let page=1
let isLoading = false
let curr=0

async function fetchData() {
    isLoading=true
    loader.style.display='block'
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${10}&_page=${page}`)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    allPosts = await res.json()
    console.log(allPosts)
    showPosts();

}


function showPosts(){
    isLoading=true
    loader.innerText='Loading'
    loader.style.display='block'
    const nextPosts = allPosts.slice(curr,curr+limit)
    console.log(nextPosts)


    nextPosts.forEach(ele=>{
      let div = document.createElement('div')
        div.className='post'
        div.innerHTML=`<h3>${ele.title}</h3>
                        <p>${ele.body}</p>`
        container.appendChild(div) 
    });
    curr+=limit
   //  loader.style.display='none'
      isLoading=false
      if(curr>=allPosts.length){
        window.removeEventListener('scroll',handleScroll)
        loader.innerText='No more data'
      }else {
    loader.style.display = 'none'; // hide if more posts remain
  }
}

function handleScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&!isLoading){
  //  page++
    showPosts();
    }
}
fetchData();

window.addEventListener('scroll', handleScroll);