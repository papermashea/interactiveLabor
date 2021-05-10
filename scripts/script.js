// function setup() {
// //     makeMap();
//     addMarker();
// };


// GETS TEST DATA
$.get('./data/data.csv', function(csvString) {

// GETS DATA
// $.get('./data/data.csv', function(csvString) {

    // map.on('load', function () {
    // map.addLayer({    

    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

     for (var i in data) {
          var row = data[i];

        console.log(data)     
// });

// function makeMap(){

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

   
      /* Control panel to display map layers */
   
function addMarker(map){
    var mapTiles = getMapTiles();
    var overlayMaps = getMaps();
    var controlLayers = L.control.layers( null, null, {
        position: "topright",
        collapsed: false
      }).addTo(map);

      // display Carto basemap tiles with light features and labels
      // var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
      // controlLayers.addBaseLayer(light, 'Carto Light basemap');

      // Read markers data from data.csv


    // $.get('./data/data.csv', function(csvString) {

    // map.on('load', function () {
    // map.addLayer({    

        // var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

            // console.log(data)     

    for (var i in data) {
      var row = data[i];

    let marker = L.marker([row.Latitude, row.Longitude] ,{
        iconUrl: './images/eventIcon.png',
        iconAnchor: [20, 50],
        opacity: 1
      }
      ).bindPopup(row.Title);
      
      marker.addTo(map);
    };

    };

    };

});