function sortByHeight() {
    let dotClassElements = $(".class").sort((a, b) => {
        return $(a).height() > $(b).height() ? -1 : 1;
    }).appendTo(".parent");

}

function randomize() {
    let dotClassElements = $(".class").sort((a, b) => {
        return Math.round(Math.random()) ? -1 : 1;
    }).appendTo(".parent");
}