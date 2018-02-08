$(document).ready(function () {

    var postalCode
    var keyword

    $("#resultsSection").hide();
    $("#submit").on('click', function (e) {
        e.preventDefault();
        postalCode = $("#location-input").val().trim();
        $("#events").empty();

        if (postalCode == '') {
            $("#reqTarget").prepend("This field is required");
        } else {

            // $("#inputMenu").hide();
            $("#resultsSection").show();
            // userLocation = $("#location-input").val();
            postalCode = $("#location-input").val();
            console.log(postalCode);
            keyword = $("#eventType-input").val();
            $("#map-container").attr("src", "https://www.google.com/maps/embed/v1/place?q="+ postalCode +"&key=AIzaSyAHuXEAS9mdigA2s8g5qz323VNGt70mpbk")
            $.ajax({
                type: "GET",
                url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&postalCode=" + postalCode + "&size=10&apikey=3YaVJZm3QgMON91AlLZSyPWcb28zycgA",
                async: true,
                dataType: "json",
                success: function (json) {
                    console.log(json);
                    if (json._embedded) {
                        for (var i = 0; i < 10; i++) {
                            var eventName = json._embedded.events[i].name;
                            var eventImage = json._embedded.events[i].images[1].url;
                            var eventNote = json._embedded.events[i].pleaseNote;
                            var eventTickets = json._embedded.events[i].url;
                            var eventAddress = json._embedded.events[i]._embedded.venues[0].address.line1;
                            console.log("ADDRESS = " + eventAddress);
                            //stops displaying undefined
                            if (eventNote === undefined) {
                                eventNote = "No notes available for this event";
                            };


                            $("#events").attr("class", "col-md-6")
                                .append("<p class = 'well'>" + eventName
                                + "<br>" +
                                "<img id='imgAPI' src=" + eventImage + " width=300 height=200>"
                                + "<br>" +
                                "Please note: " + eventNote
                                + "<br>" +
                                "<a href=" + eventTickets + " target='_blank'>" + "Buy your tickets here!</a>" + "</p>"
                                //GOOGLE MAPS HERE                        
                                )

                        }
                    } else {
                        $("#events").attr("class", "well")
                            .append("Sorry there are no shows in your area");
                    }

                },
                error: function (xhr, status, err) {
                    console.log("nope");
                    // This time, we do not end up here!
                }
            });

        }
    });
});