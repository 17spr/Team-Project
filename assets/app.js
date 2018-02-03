<<<<<<< HEAD
// var locationInput;
// var date;
// var type;

$("#resultsSection").hide();
$("#submit").click(function(){
    $("#inputMenu").hide();
    $("#resultsSection").show();
    var userLocation = $("#location-input").val();
    var userDate = $("dates-input").val();
    var userEvent = $("eventType-input").val();
    console.log(userLocation);
    console.log(userDate);
    console.log(userEvent);
});
=======

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=zVmUp31uMp1k7RTqC7NGn5TAn59nQliN",
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
>>>>>>> 127394f5abf8ee64da20313acab03e226c4a1ffe
