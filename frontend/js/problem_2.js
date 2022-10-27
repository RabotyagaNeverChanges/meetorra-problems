let menuLinks = document.querySelectorAll(".menu-list__item");

menuLinks.forEach(element => {
    element.addEventListener("click", event => {
        let previousActiveElements = document.querySelectorAll(".menu-list__active-item");
        previousActiveElements.forEach(element => {
           element.classList.remove("menu-list__active-item");
        });
        event.target.classList.add("menu-list__active-item");
    });
})