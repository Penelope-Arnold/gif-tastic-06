$(document).ready(function(){


var characters = [
    "Monica", "Joey", "Chandler"
];

function createButtons (characters){
    $("#friend-buttons").empty();
for (var i=0; i < characters.length; i++){
    var button = $("<button>");
    button.addClass(".friend-buttons");
    button.attr("data-type", characters[i])
    button.text(characters[i]);
    $("#friend-buttons").append(button);
    }
}

$("#add-friend").on("click", function(event){
    event.preventDefault();
    var newCharater = $(".gif").val().trim();
    characters.push(newCharater);
    $(".gif").val("");
    createButtons();
})

$(document).on("click", ".friend-buttons", function(){
    //$("#friends-gifs").empty();
    $("#friend-buttons").removeClass("active");
    $(this).addClass("active")

    console.log("clicked")

    var state = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+state+"&api_key=XxXIlvXpSR2rIURzrBw2N2uudNcOPN8H&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var result = response.data;

        for (var i=0; i< results.length; i++){
            var friendDiv = $("#friend-gifs")
            var rating = result[i].rating;

            var rp = $("<p>").text("Rating: " + rating);

            var active = results[i].images.fixed_height_url;
            var still = results[i].images.fixed_height_still_url;

            var gif = $("<img>");
            gif.attr("src", still);
            gif.attr("data-still", still);
            gif.attr("data-animate", active);
            gif.attr("data-state", "still");
            //gif.addClass("friend-image");

            friendDiv.append(rp);
            friendDiv.append(gif);

            $("#friends-gifs").append(friendDiv);


        }
    })
})










createButtons(characters, "friend-button", "#friend-buttons")
})