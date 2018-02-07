var postalCode
var userDate
var keyword


$("#resultsSection").hide();
$("#submit").click(function () {
   $("#inputMenu").hide();
   $("#resultsSection").show();
   userLocation = $("#location-input").val();
   postalCode = $("#dates-input").val();
   keyword = $("#eventType-input").val();

   $.ajax({
       type: "GET",
       url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&postalCode=" + postalCode + "&size=10&apikey=3YaVJZm3QgMON91AlLZSyPWcb28zycgA",
       async: true,
       dataType: "json",
       success: function (json) {
           console.log(json);

           for (var i = 0; i < 10; i++) {
               //turn these into variables so you can get rid of undefineds
               $("#events").append("<p class = 'well'>" + json._embedded.events[i].name
                   + "<br>"+
                   "<img src=" + json._embedded.events[i].images[1].url + " width=300 height=200>"
                   + "<br>" +
                   "Please note: "+ json._embedded.events[i].pleaseNote
                   +"<br>" +
                   "<a href=" + json._embedded.events[i].url +">" + "Buy your tickets here!</a>" + "</p>")

           }

       },
       error: function (xhr, status, err) {
           console.log("nope");
           // This time, we do not end up here!
       }
   });
});