$(function () {

    // VARIABLES
    var dogBreeds = ['Terrier', 'Saint Bernard', 'Rottweiler', 'Beagle'];

    // BUTTON RENDER
    function renderButtons() {
        $('#breed-btns').empty();
        dogBreeds.forEach(breed => {
            var buttons = $('<button>').text(breed);
            buttons.attr("class", "dog-btn");
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
            $('#newbreedfield').val('');
        };
        renderButtons();
    });

    renderButtons();

    // DO NOT ALLOW NUMBERS AS INPUT
    $('#newbreedfield').on("keypress", function (e) {
        var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
        var charStr = String.fromCharCode(charCode);
        if (/\d/.test(charStr)) {
            return false;
        }
    });

    // CLEAR PAGE BUTTON
    $("#clear-page").click(function () {
        document.location.reload(true);
    });

    // AJAX QUERY
    $("#breed-btns").on("click", ".dog-btn", function () {
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
                    // var gifDiv = $("<div>");
                    var dogImage = $("<img>");
                    dogImage.attr("class", "dogpics");
                    dogImage.attr("src", results[i].images.fixed_height.url);
                    // gifDiv.prepend(dogImage);
                    $("#gif-area").prepend(dogImage);
                };
            });
    });
});