$(document).ready(function(){


//variables
var apiKey = "X97PzdwnxCU8mvCqTGElRK0D1hU0gpGM" //my key
var limit = 10; //limit
var rating = "pg"; //gif rating
var searchTarget = "";//tag
var actorArray = ["Joaquin Phoenix", "Emma Stone", "Ryan Gosling", "Amy Adams", "Val Kilmer", "Cate Blanchett", "Samuel L. Jackson", "Meryl Streep", "Tom Cruise", "Tom Hanks"];


function display() {

var name = $(this).attr("data-name");
//search endpoint
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=X97PzdwnxCU8mvCqTGElRK0D1hU0gpGM&limit=" + limit + "&rating=" + rating;
console.log(queryURL);

// ajax call for clicked button
$.ajax({
  url: queryURL,
  method: "GET"
})

.done(function(response) {
  var results = response.data;
  $("#gif-section").empty();
  console.log(response);
  console.log(results);

  for (var i = 0; i < results.length; i++) {
    var gifDiv = $("<div class='result'>");
    var rating = results[i].rating; //find rating
    var ratingText = $("<p>").text("Rating: " + rating);//display rating
    var actorImage = $("<img>");
    actorImage.addClass("gif");

    actorImage.attr({
      "src": results[i].images.fixed_height_still.url,
      "data-still": results[i].images.fixed_height_still.url,
      "data-animate": results[i].images.fixed_height.url,
      "data-state": "still"
    });

    gifDiv.append(ratingText);
    gifDiv.append(actorImage);
    $("#gif-section").prepend(gifDiv);
  }
});

}
//create buttons from actorArray
function renderButton() {
$('#buttons').empty();
for (var i = 0; i < actorArray.length; i++) {
    var createNewButtonArray = $("<button>");
    createNewButtonArray.addClass("actor");
    createNewButtonArray.attr("data-name", actorArray[i]);
    createNewButtonArray.text(actorArray[i]);
    $('#buttons').append(createNewButtonArray);
    }
}

//add actor
$('#add-actor').on("click", function(event) {
  event.preventDefault();
  //grab the input from the textbox
  var newActor = $('#actor-input').val().trim();
  console.log(newActor);
  //stop creating empty button
  if (!newActor == '') {
    } else {
  newActor.stop();
  alert("Please enter some text");
  }
  actorArray.push(newActor);
  renderButton();
});

$(document).on('click', '.actor', display);
renderButton();

$(document).on('click', '.gif', function() {
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  };
});
});