$(function () {

    // VARIABLES
    var dogBreeds = ['Terrier', 'Saint Bernard', 'Rottweiler', 'Beagle'];

    // BUTTON RENDER
    function renderButtons() {
        $('#breed-btns').empty();
        dogBreeds.forEach(breed => {
            var buttons = $('<button>').text(breed);
            buttons.attr("id", "dog-btn");
            buttons.attr("data-name", breed.replace(/ /g, "_"));
            $('#breed-btns').prepend(buttons);
        });
    };

    // ADD NEW BREED LISTENER
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

    // CLEAR PAGE BUTTON
    $("#clear-page").click(function () {
        document.location.reload(true);
    });

    // AJAX QUERY
    $("#dog-btn").on("click", function () { // Only works for Beagle, sometimes. But never works for any other pre-loaded, or added buttons
        $('#gif-area').empty();
        var dataName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=OQyMsj80Q5Vaeop0ry2jPaOAFqI8Isis&rating=g&q=" + dataName;
        console.log(queryURL);

        $.ajax({
            url: queryURL, 
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var dogImage = $("<img>");
                    dogImage.attr("id", "dogpics"); // Adds an ID to each gif, but the CSS doesnt come through
                    dogImage.attr("src", results[i].images.fixed_height.url);
                    gifDiv.prepend(dogImage);
                    $("#gif-area").prepend(gifDiv);
                };
            });
    });
});

    // Need a way to clear the breed field when Add is clicked

    // Do nothing if numbers are entered