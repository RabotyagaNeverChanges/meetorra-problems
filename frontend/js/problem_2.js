let menuLinks = document.querySelectorAll(".menu-list__link");

menuLinks.forEach(element => {
    element.addEventListener("click", event => {
        let previousActiveElements = document.querySelectorAll(".menu-list__active-link");
        previousActiveElements.forEach(element => {
           element.classList.remove("menu-list__active-link");
        });
        event.target.classList.add("menu-list__active-link");
    });
})