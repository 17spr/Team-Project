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