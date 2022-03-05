let map = null;
let markers = [];

export function init(reference, config) {
  map = new google.maps.Map(reference, config);
}

/********* START MARKERS *********/
export function addMarker() {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(37.4419, -122.1419),
    title: `Academia ${markers.length}`,
    map: map,
    draggable: true,
  });
  markers.push(marker);

  generateInfoWindow(new google.maps.LatLng(37.4419, -122.1419));
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
export function deleteAllMarkers() {
  hideMarkers();
  markers = [];
}

// Deleta um item específico baseado no título
export function deleteSpecificsMarkers(title) {
  const removedMarker = markers.findIndex(
    (marker) => marker.getTitle() === title
  );
  if (removedMarker === -1) return;
  markers[removedMarker].setMap(null);
}
/********* END MARKERS *********/

/********* START INFO WINDOW *********/

function generateInfoWindow(latLang) {
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position:latLang,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
