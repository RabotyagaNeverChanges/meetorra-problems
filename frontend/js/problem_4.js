let newElement = $("<div></div>").text("Created via jQuery element which data-id equals to 123").attr("data-id", 123);
$(".wrapper").append(newElement);

let elementsWithDataId = $('*').filter(function() {
    return $(this).data('id') !== undefined;
});

console.log(elementsWithDataId);