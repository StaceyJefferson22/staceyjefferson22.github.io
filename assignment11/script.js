const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try{
        const response = await fetch(url);
        return await response.json();
    } 
    catch(error){
        console.log(error);
    }
};

const showMovies = async () =>{
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
    });
};


//spelling error occured: 
//constructor was gteMovieItem and not getMovieItem. 
//developer tool was helpful in solving the problem.
const getMovieItem = (movie) => {
    const movieSection = document.createElement("section");
    const span = document.createElement("span");
    const URL = "https://portiaportia.github.io/json/";

    const img = document.createElement("img");
    img.src = URL + movie.img;
    movieSection.append(img);

    const h2 = document.createElement("h2");//had img instead of h3
    h2.innerText = movie.title;
    span.append(h2);
    movieSection.append(span);

    //Something is wrong with p. It is only showing ${movie.whatever}
    const p = document.createElement("p");
    span.append(p);
    p.innerHTML = "<strong>Director: </strong>"
    p.innerHTML += movie.director;
    p.innerHTML += "<br><strong>Actors: </strong>"
    p.innerHTML += movie.actors;
    p.innerHTML += "<br><strong>Year Released: </strong>"
    p.innerHTML += movie.year;
    p.innerHTML += "<br><strong>Genres: </strong>"
    p.innerHTML += movie.genres;
    p.innerHTML += "<br>"
    p.innerHTML += movie.description;
    movieSection.append(span);

    movieSection.classList.add("flexbox");
    return movieSection;
};

window.onload = () => showMovies();