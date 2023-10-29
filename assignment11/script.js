const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try{
        const response = await fetch(url);
        return await response.json();
    } catch(error){
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

const gteMovieItem = (movie) => {
    let movieSection = document.createElement("section");
    let span = document.createElement("span");
    const URL = "https://portiaportia.github.io/json/";

    let movieImage = document.createElement("img");
    img.src = URL + movie.img;
    section.append(img);

    let h3 = document.createElement("img");
    h3.innerText = movie.name;
    span.append(h3);
    section.append(span);

    let p = document.createElement("p");
    span.append(p);
    p.innerHTML = "Director: ${movie.director}";
    p.innerHTML = "Actors: ${movie.actors}";
    p.innerHTML = "Year: ${movie.year}";
    p.innerHTML = "Genre: ${movie.genres}";
    p.innerHTML = "Description: ${movie.description}";
    section.append(span);

    section.classList.add("flexbox");
    return section;
}

window.onload = () => showMovies();