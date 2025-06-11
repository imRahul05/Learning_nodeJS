// //http://www.omdbapi.com/?i=tt3896198&apikey=588857ab




let originalList =[]
async function getData() {
    const movie = document.getElementById('movie').value;

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=588857ab&s=${movie}`);
        const data = await res.json();
        //  originalList= data
        //  console.log(originalList,"originalList")
         console.log("data",data)
        console.log("Full response:", data);
    } catch (error) {
        console.log("Fetch error:", error);
    }
}
async function getData() {
    const movie = document.getElementById('movie').value;
    const moviesContainer = document.getElementById('movies-container');
    
    if (!movie) {
        alert('Please enter a movie name');
        return;
    }

    try {
        moviesContainer.innerHTML = '<h2>Loading...</h2>';
        
        const res = await fetch(`https://www.omdbapi.com/?apikey=588857ab&s=${movie}`);
        const data = await res.json();
        originalList=data.Search
        //    console.log(originalList.Search,"originalList")
        //  console.log("data",data)
        displayMovies(data.Search);
    } catch (error) {
        console.log("Fetch error:", error);
        moviesContainer.innerHTML = `<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVvbGE1eGl1dXlhd3l2bThzY2VqcDNqZ255OG00amZjMjM0M2czbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gX3u0staej6wAnRlcP/giphy.gif'>`;
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x400?text=No+Poster' : movie.Poster}" 
                     alt="${movie.Title}">
                <div class="movie-info">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                </div>
            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

// Add event listener for Enter key
document.getElementById('movie').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getData();
    }
});




function handleSort(){
    let sortType = document.getElementById('sort').value
    let sortedList = [...originalList]

     console.log(sortedList)
    if(sortType==='asc'){
        sortedList.sort((a,b)=>parseInt(a.Year)-parseInt(b.Year))
    }else if(sortType="desc"){
       sortedList.sort((a,b)=>parseInt(b.Year)-parseInt(a.Year))
    }

    let filterType = document.getElementById('filter').value
     
    if(filterType){
       sortedList=  sortedList.filter((movie)=>movie.Type===filterType)
     
    }
    displayMovies(sortedList)

}


function handleFilter(){
    let filterType = document.getElementById('filter').value
    let filteredList = [...originalList]
     
    if(filterType){
       filteredList=  filteredList.filter((movie)=>movie.Type===filterType)
     
    }
   let sortType = document.getElementById('sort').value
     if(sortType==='asc'){
        filteredList.sort((a,b)=>parseInt(a.Year)-parseInt(b.Year))
    }else if(sortType="desc"){
       filteredList.sort((a,b)=>parseInt(b.Year)-parseInt(a.Year))
    }
    displayMovies(filteredList)
}

























