var postalCode
var userzip= $("location-input").val();
var keyword


$("#resultsSection").hide();
$("#submit").click(function () {
    $("#inputMenu").hide();
    $("#resultsSection").show();
    // userLocation = $("#location-input").val();
    postalCode = $("#location-input").val();
    console.log(postalCode);
    keyword = $("#eventType-input").val();

    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&postalCode=" + postalCode + "&size=10&apikey=3YaVJZm3QgMON91AlLZSyPWcb28zycgA",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);

            for (var i = 0; i < 10; i++) {
                var eventName = json._embedded.events[i].name;
                var eventImage = json._embedded.events[i].images[1].url;
                var eventNote = json._embedded.events[i].pleaseNote;
                var eventTickets = json._embedded.events[i].url;
                var eventAddress= json._embedded.events[i]._embedded.venues[0].address.line1;
                console.log("ADDRESS = " + eventAddress);
                //stops displaying undefined
                if (eventNote === undefined){
                    eventNote = "No notes available for this event";
                };
                $("#events").append("<p class = 'well'>" + eventName
                    + "<br>"+
                    "<img src=" + eventImage + " width=300 height=200>"
                    + "<br>" +
                    "Please note: "+ eventNote
                    +"<br>" +
                    "<a href=" + eventTickets +">" + "Buy your tickets here!</a>" + "</p>")

            }

        },
        error: function (xhr, status, err) {
            console.log("nope");
            // This time, we do not end up here!
        }
    });
});




