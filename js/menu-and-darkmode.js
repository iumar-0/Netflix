
// popup menu for phones
let open_nav = document.querySelector(".menu-icon-div");
let popup_nav = document.querySelector(".menu-nav-overall-div");
let menu_section = document.querySelector(".menu-nav-open-div");

open_nav.addEventListener("click", () => {
    popup_nav.style.display = "flex";
    document.body.style.overflow = "hidden";
});

popup_nav.addEventListener("click", () => {
    popup_nav.style.display = "none"
    document.body.style.overflow = "";

});

menu_section.addEventListener("click", (dets) => {
    dets.stopPropagation();
    console.log("menu clicked");

});

// dark mode
let dark_mode = document.querySelectorAll(".checkbox-darkmode");

dark_mode.forEach(element => {
    element.addEventListener("change", () => {

        document.body.classList.toggle("dark-mode");
        console.log("dark mode acitivated");

    });
});

