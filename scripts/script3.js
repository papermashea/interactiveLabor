mapboxgl.accessToken = 'pk.eyJ1IjoicGFwZXJtYXNoZWEiLCJhIjoiY2szbnh6bGI4MXY1cjNjbjFkMnZvcjQ1ayJ9.MKO-bDpbg-5sZ2sIN8MJ5Q';

  var map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-97.031362, 39.701775], // EDIT latitude, longitude to re-center map
    zoom: 4,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: false,
    tap: false,
    pitch: 0,
    bearing: 0,
    style: 'mapbox://styles/papermashea/ckoi0cbxo0i1918ofoje3lak1',
    });


// GETS SAMPLE DATA
// $.get('./data/sampleData.csv', function(csvString) {

// GETS TEST DATA
$.get('./data/testData.csv', function(csvString) {

// GETS DATA
// $.get('./data/data.csv', function(csvString) {

    map.on('load', function () {
    // map.addLayer({    

    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

     for (var i in data) {
          var row = data[i];

        console.log(data)     
    // });
   
function addMarker(map){

    var mapTiles = getMapTiles();
    var overlayMaps = getMaps();
    var controlLayers = L.control.layers( null, null, {
        position: "topright",
        collapsed: false
      }).addTo(map);

      var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
      controlLayers.addBaseLayer(light, 'Carto Light basemap');


    var marker = L.marker([row.Latitude, row.Longitude] ,{
        iconUrl: './images/eventIcon.png',
        // iconAnchor: [20, 50],
        opacity: 1
      }
      ).bindPopup(row.Title);
      
      marker.addTo(map);
    };

    };

    });

  map.attributionControl.setPrefix(
    'View <a href="https://github.com/HandsOnDataViz/leaflet-map-csv" target="_blank">code on GitHub</a>'
  );

});