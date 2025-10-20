// === movie rander with backend data ===
movie_rander_details = [
    {
        id: 1,
        title: "scr/logo/hesit.webp",
        year: "2025",
        rating: "90% Match",
        genres: ["Action", "Thriller"],
        description: "A high-octane action thriller filled with twists and turns.",
        posterImage: "scr/images/1.webp",
        heroImage: "scr/images/moneyhesit.webp"


    },
    {
        id: 2,
        title: "scr/logo/mundla.webp",
        year: "2024",
        rating: "85% Match",
        genres: ["Drama", "Mystery"],
        description: "An emotionally charged drama unraveling a deep mystery.",
        posterImage: "scr/images/2.webp",
        heroImage: "scr/images/mundala.webp"
    },
    {
        id: 3,
        title: "scr/logo/oldguard.webp",
        year: "2023",
        rating: "88% Match",
        genres: ["Sci-Fi", "Adventure"],
        description: "A futuristic adventure beyond imagination and limits.",
        posterImage: "scr/images/10.webp",
        heroImage: "scr/images/oldguard.webp"
    },
    {
        id: 4,
        title: "scr/logo/squid.webp",
        year: "2022",
        rating: "92% Match",
        genres: ["Comedy", "Family"],
        description: "A lighthearted family comedy packed with fun and laughter.",
        posterImage: "scr/images/4.webp",
        heroImage: "scr/images/squidgame.webp"
    },
    {
        id: 5,
        title: "scr/logo/sikandar.webp",
        year: "2021",
        rating: "89% Match",
        genres: ["Romance", "Drama"],
        description: "A passionate love story that tests the boundaries of fate.",
        posterImage: "scr/images/11.webp",
        heroImage: "scr/images/sikarnadar.webp"
    },
    {
        id: 6,
        title: "scr/logo/raid.webp",
        year: "2020",
        rating: "91% Match",
        genres: ["Horror", "Thriller"],
        description: "A chilling horror story that will keep you on edge.",
        posterImage: "scr/images/6.webp",
        heroImage: "scr/images/raid2.webp"
    },
    {
        id: 7,
        title: "scr/logo/kapil.webp",
        year: "2019",
        rating: "87% Match",
        genres: ["Documentary"],
        description: "A thought-provoking documentary revealing untold truths.",
        posterImage: "scr/images/7.webp",
        heroImage: "scr/images/kapil.webp"
    },
    {
        id: 8,
        title: "scr/logo/life.webp",
        year: "2018",
        rating: "86% Match",
        genres: ["Fantasy", "Adventure"],
        description: "An enchanting tale set in a world of fantasy and wonder.",
        posterImage: "scr/images/8.webp",
        heroImage: "scr/images/sexlife.webp"
    },
    {
        id: 9,
        title: "scr/logo/roayls.webp",
        year: "2017",
        rating: "93% Match",
        genres: ["Crime", "Thriller"],
        description: "A gripping crime thriller that delves into the underworld.",
        posterImage: "scr/images/9.webp",
        heroImage: "scr/images/royals.webp"
    }
];


// creating the movie section from template

let movie_section_template = document.querySelector("#movie-section-template");
let movie_images_section = document.querySelector(".images-section");


document.addEventListener("DOMContentLoaded", (dets) => {
    console.log("Movie images loading.......");

    movie_rander_details.forEach(element => {
        let copy_template = movie_section_template.content.cloneNode(true);

        // moving data in movie images section

        let Id = element.id;
        let title = element.title;
        let year = element.year;
        let rating = element.rating;
        let description = element.description;
        let movieImage = element.posterImage;
        let posterImage = element.heroImage
        let geners = element.genres;

        // console.log(geners);


        let data_entery_through_dataFetch = copy_template.querySelector(".img-div");

        data_entery_through_dataFetch.dataset.id = Id;
        data_entery_through_dataFetch.dataset.title = title;
        data_entery_through_dataFetch.dataset.year = year;
        data_entery_through_dataFetch.dataset.rating = rating;
        data_entery_through_dataFetch.dataset.geners = geners;
        data_entery_through_dataFetch.dataset.description = description;
        data_entery_through_dataFetch.dataset.movieUrl = movieImage;
        data_entery_through_dataFetch.dataset.posterUrl = posterImage;



        let image_upload = copy_template.querySelector(".images");
        image_upload.src = movieImage;

        let numberofimages = copy_template.querySelector(".movie-number-span");
        numberofimages.textContent = Id;

        movie_images_section.append(copy_template);
    });
    console.log("Movie images loaded Successfully");

});


// Movie Poster Popup
let popup_image_click = document.querySelector(".images-section");

let popup_image_poster = document.querySelector(".transparent-moviePoster-div");
let posterimagescr = document.querySelector(".logo-poster-image");
let posterimageyear = document.querySelector(".year-number");
let posterimagerating = document.querySelector(".Rating");
let posterimagegeners = document.querySelector(".geners-div");
let posterimagedesc = document.querySelector(".poster-image-des-span");



popup_image_click.addEventListener("click", (dets) => {
    // console.log(dets.target);

    document.body.style.overflow = "hidden";
    let finding_target_id = dets.target.closest(".img-div");

    if (finding_target_id) {
        // if only runs when its true]

        console.log(finding_target_id.dataset.posterUrl);

        document.documentElement.style.setProperty(
            '--posterImage',
            `none`
        );

        const posterUrl = finding_target_id.dataset.posterUrl;
        console.log(posterUrl);

        document.documentElement.style.setProperty(
            '--posterImage',
            `url(${posterUrl})`
        );

        posterimagescr.src = finding_target_id.dataset.title;



        posterimageyear.textContent = finding_target_id.dataset.year;

        posterimagerating.textContent = finding_target_id.dataset.rating;

        posterimagedesc.textContent = finding_target_id.dataset.description;

        let geners_stroing = finding_target_id.dataset.geners;

        let genersArray = geners_stroing.split(",");
        genersArray.forEach(element => {
            let geners_tag_creating = document.createElement("span");
            geners_tag_creating.classList.add("year");
            geners_tag_creating.textContent = element.trim();
            posterimagegeners.append(geners_tag_creating);
            // console.log(element);

        });



        popup_image_poster.style.display = "flex";

    };
});

