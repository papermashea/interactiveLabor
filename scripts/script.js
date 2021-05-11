// SETUP MAP
L.mapbox.accessToken = 'pk.eyJ1IjoicGFwZXJtYXNoZWEiLCJhIjoiY2szbnh6bGI4MXY1cjNjbjFkMnZvcjQ1ayJ9.MKO-bDpbg-5sZ2sIN8MJ5Q';

var map = L.mapbox.map('map')
    .setView([38.97416, -95.23252], 4.1);

L.mapbox.styleLayer('mapbox://styles/papermashea/ckoi0cbxo0i1918ofoje3lak1').addTo(map);


// // CONTROL PANEL
 var controlLayers = L.control.layers( null, null, {
   position: "topright",
   collapsed: false
 }).addTo(map);



// // ADD DATA
$.get('./data/data.csv', function(csvString) {
  // Use PapaParse to convert string to array of objects
  var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;


    //DEFINE ICON CLASSES
      // iconSize: [w, h]

    let eventIcon = L.icon({
        iconUrl: './images/eventIcon.png',
        iconSize:     [15, 15], 
        className: 'eventIcon'
    });  

    let landIcon = L.icon({
        iconUrl: './images/landIcon.png',
        iconSize:     [15, 20], 
        className: 'landIcon'
    });  

    let leaderIcon = L.icon({
        iconUrl: './images/leaderIcon.svg',
        iconSize:     [15, 15], 
        className: 'leaderIcon'
    });  

    let strikeIcon = L.icon({
        iconUrl: './images/strikeIcon.png',
        iconSize:     [15, 20], 
        className: 'strikeIcon'
    });  

    let orgIcon = L.icon({
        iconUrl: './images/orgIcon.png',
        iconSize:     [15, 20],
        className: 'orgIcon'
    });  


    // For each row in data, create a marker and add it to the map
    for (var i in data) {
      var row = data[i];

      // EVENTS
        if (row.Tag == "Event") {
          var eventMarker = L.marker([row.Latitude, row.Longitude], {
            opacity: 1,
            icon: eventIcon
          }).bindPopup("<h3>" + "<span id='year'>" + row.Year + "</span>" + ": " + "<span id='tag'>Historic " + row.Tag + "</span>" + "</h3>"
                      + "<p>Involving " + row.Title + " and " + row.Size + " others." + "</p>"
                      + "<p>Details: " + row.Details + "</p>");
          eventMarker.addTo(map);        
        };

      // LANDMARKS
        if (row.Tag == "Landmark") {
          var landMarker = L.marker([row.Latitude, row.Longitude], {
            opacity: 1,
            icon: landIcon
          }).bindPopup("<h3>" + "<span id='year'>" + row.Year + "</span>" + ": " + "<span id='tag'>Labor " + row.Tag + "</span>" + "</h3>"
                      + "<p>Involving " + row.Title + " and " + row.Size + " people." + "</p>"
                      + "<p>Details: " + row.Details + "</p>");
          landMarker.addTo(map);        
        };

      // LEADERS
        if (row.Tag == "Leader") {
          var leaderMarker = L.marker([row.Latitude, row.Longitude], {
            opacity: 1,
            icon: leaderIcon
          }).bindPopup("<h3>" + "<span id='year'>" + row.Year + "</span>" + ": " + "<span id='tag'>Labor " + row.Tag + "</span>" + "</h3>"
                      + "<p>Involving " + row.Title + " and " + row.Size + " people." + "</p>"
                      + "<p>Details: " + row.Details + "</p>");
          leaderMarker.addTo(map);        
        };

      // ORGANIZATIONS
        if (row.Tag == "Organization") {
          var orgMarker = L.marker([row.Latitude, row.Longitude], {
            opacity: 1,
            icon: orgIcon
          }).bindPopup("<h3>" + "<span id='year'>" + row.Year + "</span>" + ": " + "<span id='tag'>Labor " + row.Tag + "</span>" + "</h3>"
                      + "<p>Involving " + row.Title + " and " + row.Size + " people." + "</p>"
                      + "<p>Details: " + row.Details + "</p>");
          orgMarker.addTo(map);        
        };

      // STRIKES
        if (row.Tag == "Strike") {
          var strikeMarker = L.marker([row.Latitude, row.Longitude], {
            opacity: 1,
            icon: strikeIcon
          }).bindPopup("<h3>" + "<span id='year'>" + row.Year + "</span>" + ": " + "<span id='tag'>" + row.Tag + "</span>" + "</h3>"
                      + "<p>Involving " + row.Title + " and " + row.Size + " people." + "</p>"
                      + "<p>Details: " + row.Details + "</p>");
          strikeMarker.addTo(map);        
        };

    };

  });
