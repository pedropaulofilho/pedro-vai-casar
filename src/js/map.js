$(document).ready(function(){
  var map,
      directionsDisplay,
      directionsService = new google.maps.DirectionsService();

  function initMap() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    var latlng = new google.maps.LatLng(-22.9934640, -43.5061130);

    var grayStyles = [
      { "featureType": "water","elementType": "geometry.fill","stylers": [{ "color": "#d3d3d3" }] },
      { "featureType": "transit","stylers": [{ "color": "#808080" },{ "visibility": "off" }] },
      { "featureType": "road.highway","elementType": "geometry.stroke","stylers": [{ "visibility": "on" },
      { "color": "#b3b3b3" }] },
      { "featureType": "road.highway","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }] },
      { "featureType": "road.local","elementType": "geometry.fill","stylers": [{ "visibility": "on" },
      { "color": "#ffffff" },
      { "weight": 1.8 }] },
      { "featureType": "road.local","elementType": "geometry.stroke","stylers": [{ "color": "#d7d7d7" }] },
      { "featureType": "poi","elementType": "geometry.fill","stylers": [{ "visibility": "on" },
      { "color": "#ebebeb" }] },
      { "featureType": "administrative","elementType": "geometry","stylers": [{ "color": "#a7a7a7" }] },
      { "featureType": "road.arterial","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }] },
      { "featureType": "road.arterial","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }] },
      { "featureType": "landscape","elementType": "geometry.fill","stylers": [{ "visibility": "on" },
      { "color": "#efefef" }] },
      { "featureType": "road","elementType": "labels.text.fill","stylers": [{ "color": "#696969" }] },
      { "featureType": "administrative","elementType": "labels.text.fill","stylers": [{ "visibility": "on" },
      { "color": "#737373" }] },
      { "featureType": "poi","elementType": "labels.icon","stylers": [{ "visibility": "off" }] },
      { "featureType": "poi","elementType": "labels","stylers": [{ "visibility": "off" }] },
      { "featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{ "color": "#d6d6d6" }] },
      { "featureType": "road","elementType": "labels.icon","stylers": [{ "visibility": "off" }] },
      {  },
      { "featureType": "poi","elementType": "geometry.fill","stylers": [{ "color": "#dadada" }]}
    ];

    var options = {
      zoom: 14,
      center: latlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: grayStyles
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: ''
    });

    directionsDisplay.setMap(map);

  } initMap();

  $('#formLocation').submit(function(e){
    e.preventDefault();

    var $address = $(this).find('input');

    if(/^[0-9]*$/g.test($address.val())) {
      $address.addClass('invalid');
    }else {
      $address.removeClass('invalid');
      var request = {
        origin: $address.val(),
        destination: '-22.9934640, -43.5061130',
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
           directionsDisplay.setDirections(result);
        }
     });
   }

  });

});
