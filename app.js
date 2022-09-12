let formSubmit = document.getElementById("formSubmit")
let valueInput = document.getElementById("valueInput")
let search = ""
let movie = []
const ApiKey = "e712012897189fcd6990db785cb0b498"

const fetchMovie = async () => {
    const ApiUri = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${valueInput.value}`;
    movie = await fetch(ApiUri) . then((reponse) => reponse.json())
    console.log(movie);
}

 const displayMovie = async ()=>{
    await fetchMovie()
    result.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="first-card">
                <img  src="https://image.tmdb.org/t/p/w500/${movie.results[0].poster_path}" class="card-img-top" alt="meteo_du_jour">
                <div class="card-body text-center">
                <h5 class="card-title"> ${movie.results[0].title}</h5>
                <h5 class="card-title"> ${movie.results[0].original_language}</h5>
                <p class="card-text">popularity : ${movie.results[0].popularity} spectateur</p>
                <p class="card-text">note : ${movie.results[0].vote_average}</p>
                <p class="card-text"> date de sortie : ${movie.results[0].release_date}</p>
                </div>
            </div>
                <div class="back-card"></div>
                <div class="thid-card"></div>
        </div> 
     `
 }

 formSubmit.addEventListener("submit", e=> {
     e.preventDefault()
     city = valueInput.value;
     (city.length > 3) ?
        displayMovie()
     :
         result.innerHTML = 
             `<div id="result" class="alert aler-danger" role="alert">
                 Veuillez saisir le nom du film
             </div>`
 })
