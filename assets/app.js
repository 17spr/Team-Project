$(document).ready(function () {
    AOS.init();
    var postalCode
    var keyword
    $("#resultsSection").hide();
    $("#submit").on('click', function (e) {
        e.preventDefault();
        $("#reloadButton").click(function () {
            location.reload();
        })
        $("#location-input").text("");
        postalCode = $("#location-input").val().trim();
        $("#events").empty();
        if (postalCode == '') {
            $("#reqTarget").prepend("This field is required");
        } else {
            $("#inputMenu").hide();
            $("#resultsSection").show();
            postalCode = $("#location-input").val();
            keyword = $("#eventType-input").val();

            $.ajax({
                type: "GET",
                url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&postalCode=" + postalCode + "&size=10&apikey=3YaVJZm3QgMON91AlLZSyPWcb28zycgA",
                async: true,
                dataType: "json",
                success: function (json) {
                    console.log(json);
                    if (json._embedded) {
                        for (var i = 0; i <json.page.totalElements; i++) {
                            
                            var responseData = json._embedded.events[i];
                            var eventName = responseData.name;
                            var eventImage = responseData.images[1].url;
                            var eventNote = responseData.pleaseNote;
                            var eventTickets = responseData.url;
                            var eventAddress = responseData._embedded.venues[0].address.line1;
                            var eventLat = responseData._embedded.venues[0].location.latitude;
                            var eventLong = responseData._embedded.venues[0].location.longitude;

                            if (eventNote === undefined) {
                                eventNote = "No notes available for this event";
                            };

                            $("#events").attr("class", "col-md-6")
                                .append("<p data-aos='fade-right' class = 'well'>" + eventName
                                + "<br>" +
                                "<img id='imgAPI' src=" + eventImage + " width=300 height=200>"
                                + "<br>" +
                                "Please note: " + eventNote
                                + "<br>" +
                                "<a href=" + eventTickets + " target='_blank'>" + "Buy your tickets here!</a>" + "</p>"
                                )
                            $("#map-container").attr("src", "https://www.google.com/maps/embed/v1/place?q=" + postalCode + "&key=AIzaSyAHuXEAS9mdigA2s8g5qz323VNGt70mpbk")

                        };
                    } else {
                        $("#events").attr("class", "well")
                            .append("<p>Sorry there are no shows in your area</p>")
                            .append("<br>")
                            .append("<button id='reloadButton' class='noShowButton'>Search Again</button>");
                    }
                    $("#reloadButton").click(function () {
                        location.reload();
                    })
                },
                error: function (xhr, status, err) {
                }
            });
        }
    });
});