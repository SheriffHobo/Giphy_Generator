$(function () {

    // VARIABLES
    var dogBreeds = ['Terrier', 'Saint Bernard', 'Rottweiler', 'Beagle'];

    // BUTTON RENDER
    function renderButtons() {
        $('#breed-btns').empty();
        dogBreeds.forEach(breed => {
            var buttons = $('<button>').text(breed);
            $('#breed-btns').prepend(buttons);
        });
    };

    // CLICK LISTENER
    $("#add-breed").on("click", function (event) {
        event.preventDefault();
        var userInput = $('#newbreedfield').val().trim();
        if (userInput === '') {
            return;
        } else {
            dogBreeds.push(userInput);
            $('#needbreedfield').val('');
        };
        renderButtons();
    });
    renderButtons();

    // CLEAR THE PAGE
    $("#clear-page").click(function() {
        document.location.reload(true);
    });







    // GIF start/stop
    // $(".gif").on("click", function () {

    // var state = $(this).attr("data-state");
    // if (state === "still") {
    //     $(this).attr("data-state", "animate");
    //     $(this).attr("src", $(this).attr("data-animate"))
    // } else {
    //      $(this).attr("data-state", "still");
    //     $(this).attr("src", $(this).attr("data-still"))
    // };
    // });

});