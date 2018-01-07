
var apiKey = "X97PzdwnxCU8mvCqTGElRK0D1hU0gpGM" //my key
var limit = 10; //limit
var rating = "pg"; //gif rating
var searchTarget = "";//tag
var actorArray = ["Arnold"];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=" + limit + "&rating=" + rating + "&tag=" + "arnold";
// q
// limit 
// rating
function runSearch(limit, queryURL) {
$.ajax({
    url: queryURL,
    method: "GET"
})

.done(function(response){
    //save image URL proprety
    console.log("url: " + queryURL);
    console.log(response);
    var imageURL = response.data.image_originalurl;
    //create and store image tag
    var actorImage = $("<img>");
    //set image src to 
    actorImage.attr("src", imageUrl);
    actorImage.attr("alt", searchTarget +" actor image");
    // prepend
    $(".images").prepend(actorImage);

})
}

$(document).ready(function() {
    $("#add-button").on('click', function(){
        //add input from form to API call
        // grab 10 static, non-animated gif images from the GIPHY API and place them on the page
        // display gif rating
        // add class to gif, define start/stop parameters
            // clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    
        })
})