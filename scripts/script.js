// SETUP MAP
L.mapbox.accessToken = 'pk.eyJ1IjoicGFwZXJtYXNoZWEiLCJhIjoiY2szbnh6bGI4MXY1cjNjbjFkMnZvcjQ1ayJ9.MKO-bDpbg-5sZ2sIN8MJ5Q';

var map = L.mapbox.map('map')
    .setView([42.101,-94.985], 4.5);

L.mapbox.styleLayer('mapbox://styles/papermashea/ckoi0cbxo0i1918ofoje3lak1').addTo(map);


// // CONTROL PANEL
 // var controlLayers = L.control.layers( null, null, {
 //   position: "topright",
 //   collapsed: false
 // }).addTo(map);


// // ADD DATA
$.get('./data/data.csv', function(csvString) {
  // Use PapaParse to convert string to array of objects
  var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;


    //DEFINE ICON CLASSES
      // iconSize: [w, h]

    let eventIcon = L.icon({
        iconUrl: './images/eventIcon_pink.png',
        iconSize:     [15, 15], 
        className: 'eventIcon'
    });  

    let landIcon = L.icon({
        iconUrl: './images/landIcon_purple.png',
        iconSize:     [15, 20], 
        className: 'landIcon'
    });  

    let leaderIcon = L.icon({
        iconUrl: './images/leaderIcon_purple.png',
        iconSize:     [15, 15], 
        className: 'leaderIcon'
    });  

    let orgIcon = L.icon({
        iconUrl: './images/orgIcon_red.png',
        iconSize:     [15, 20],
        className: 'orgIcon'
    });  

    let strikeIcon = L.icon({
        iconUrl: './images/strikeIcon_red.png',
        iconSize:     [15, 20], 
        className: 'strikeIcon'
    });  

    let techIcon = L.icon({
        iconUrl: './images/techIcon_purple.png',
        iconSize:     [15, 15],
        className: 'techIcon'
    });  

    // For each row in data, create a marker and add it to the map
    for (var i in data) {
      var row = data[i];

      // EVENTS
        if (row.tag == "Event") {
          var eventMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: eventIcon
          }).bindPopup('<h3><img class="label" src="./images/eventIcon_pink.png">' + "Historic " + row.title + " of " + row.year + '</h3>'
                      + '<p class="details">' + row.details + '</p>');
          eventMarker.addTo(map);        
        };

      // LANDMARKS
        if (row.tag == "Landmark") {
          var landMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: landIcon
          }).bindPopup('<h3><img class="label" src="./images/landIcon_purple.png">' + row.title + "</span>"  + '<span id="year"> created in ' + row.year + "</span>"+ '</h3>'
                      // + '<h4>' + row.title + '</h4>'
                      + '<p class="details"><span id="deets"> ' + '</span>' + row.details + '</p>');
          landMarker.addTo(map);        
        };

      // LEADERS
        if (row.tag == "Leader") {
          var leaderMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: leaderIcon
          }).bindPopup('<h3><img class="label" src="./images/leaderIcon_purple.png">' + row.year + ": " + "<span id='tag'>Labor " + row.tag + '</h3>'
                      + '<h4>Involving ' + row.title + ' and ' + row.people + ' others</h4>'
                      + '<p class="details"><span id="deets">Details: ' + '</span>' + row.details + '</p>');
          leaderMarker.addTo(map);        
        };

      // ORGANIZATIONS
        if (row.tag == "Organization") {
          var orgMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: orgIcon
          }).bindPopup('<h3><img class="label" src="./images/orgIcon_red.png">' + row.title + " created " + row.year + '</h3>'
                      + '<p class="details"><span id="deets">Details: ' + '</span>' + row.details + '</p>');
          orgMarker.addTo(map);        
        };

      // STRIKES
        if (row.tag == "Strike") {
          var strikeMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: strikeIcon
          }).bindPopup('<h3><img class="label" src="./images/strikeIcon_red.png">' + row.year + " " + row.title + " " + "<span id='tag'>" + row.tag + '</h3>'
                      + '<h4>' + row.people + ' workers</h4>'
                      + '<p class="details"><span id="deets">Details: ' + '</span>' + row.details + '</p>');
          strikeMarker.addTo(map);        
        };

      // TECH
        if (row.tag == "Tech") {
          var techMarker = L.marker([row.lat, row.long], {
            opacity: 1,
            icon: techIcon
          }).bindPopup('<h3><img class="label" src="./images/techIcon_purple.png">' + row.title + ", " + row.year + '</h3>'
                      + '<p class="details"><span id="deets">Details: ' + '</span>' + row.details + '</p>');
          techMarker.addTo(map);
        };

    };

  });
