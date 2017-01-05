var map;
var location1;
var location2;

init()

function init() {
  var map = create_map()
  var geocoder;
  var geocoder1;
  geocoder = new google.maps.Geocoder();
  geocoder1 = new google.maps.Geocoder();

  var address2 = "7703 Oak Meadout Ct, Cupertino, CA"
  geocoder1.geocode( { 'address': address2}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      location2 = results[0].geometry.location;
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      location2 = marker.getPosition()
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  var address = "215 Marianne Ct, Mountain View, CA"
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      location1 = results[0].geometry.location;
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      location1 = marker.getPosition()
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  console.log('hello')
}


function create_map() {
  return new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: {lat: 37.090, lng: -95.712}
            });
}