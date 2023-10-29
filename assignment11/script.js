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
    let section = document.createElement("section");
    let span = document.createElement("span");
    const URL = "https://portiaportia.github.io/json/";

    let img = document.createElement("img");
    img.src = URL + movie.img;
    section.append(img);

    let h3 = document.createElement("h3");//had img instead of h3
    h3.innerText = movie.title;
    span.append(h3);
    section.append(span);

    //Something is wrong with p. It is only showing ${movie.whatever}
    let p = document.createElement("p");
    span.append(p);
    p.innerHTML = '<b>Director: </b>${movies.director}';
    p.innerHTML += '<br><b> Actors: </b>${movies.actors}';
    p.innerHTML += '<br><b>Year: </b> ${movies.year}';
    p.innerHTML += '<br><b>Genres: </b> ${movies.genres}';
    p.innerHTML += '<br><b>Description: </b>${movies.description}';
    section.append(span);

    section.classList.add("flexbox");
    return section;
};

window.onload = () => showMovies();