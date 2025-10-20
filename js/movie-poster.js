// closing and opening movie poster


// close
let close_movie_poster = document.querySelector(".close-button-movieposter");
let tras_movie_poster = document.querySelector(".transparent-moviePoster-div");
let movie_poster_div = document.querySelector(".card-moviePoster-div");

close_movie_poster.addEventListener("click", function (dets) {

    tras_movie_poster.style.display = "none";
    console.log("Closing Movie Poster");
    document.body.style.overflow = "";
});

movie_poster_div.addEventListener("click", (dets) => {
    dets.stopPropagation();
    console.log("Movie Poster Clicked");

})

tras_movie_poster.addEventListener("click", (dets) => {

    console.log("Movie poster overall div clicked");

    tras_movie_poster.style.display = "none";
    console.log("Closing Movie Poster");
    document.body.style.overflow = "";

})