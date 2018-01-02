
var apiKey = X97PzdwnxCU8mvCqTGElRK0D1hU0gpGM
var limit = 10;
var rating = pg;

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "?q=" + "?limit=" + limit + "?rating=" + rating;
// q
// limit 
// rating

$.ajax({
    url: queryURL,
    method: "GET"
})

.done(function(response){
    //save image URL proprety
    var imageURL = response.etc;
    //create and store image tag
    var actorImage = $("<img>");
    //set image src to 
    actorImage.attr("src", imageUrl);
    actorImage.attr("alt", "actor image");
    // prepend
    $(".images").prepend(actorImage);

})


$(document).ready(function() {
    $("#add-button").on('click', function(){
        //add input from form to API call
        // grab 10 static, non-animated gif images from the GIPHY API and place them on the page
        // display gif rating
        // add class to gif, define start/stop parameters
            // clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    
        })
})