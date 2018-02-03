// var locationInput;
// var date;
// var type;

$("#resultsSection").hide();
$("#submit").click(function(){
    $("#inputMenu").hide();
    $("#resultsSection").show();
    var userLocation = $("#location-input").val();
    var userDate = $("#dates-input").val();
    var userEvent = $("#eventType-input").val();
    console.log(userLocation);
    console.log(userDate);
    console.log(userEvent);
});

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=uZrGVFJQay8KHWA3JD1inIkZsNADJ66s",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
})


// after we get the AJAX data...
.done(function(response) {
    
})

