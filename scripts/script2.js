var sidebar;
var map;

function setup() {
    color(RGB);
    map();
    // sidebar();

    
function map() { 
    map = L.map('labor-map').setView([-95.059318, 40.664189], 4);
    L.mapbox.styleLayer('mapbox://styles/papermashea/ckoi0cbxo0i1918ofoje3lak1', {
        accessToken: 'pk.eyJ1IjoicGFwZXJtYXNoZWEiLCJhIjoiY2szbnh6bGI4MXY1cjNjbjFkMnZvcjQ1ayJ9.MKO-bDpbg-5sZ2sIN8MJ5Q'
    }).addTo(map);

    // $.get('./data/data.csv', function(csvString) {

    //     // Use PapaParse to convert string to array of objects
    //     var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
    //     console.log(data)

    //     // For each row in data, create a marker and add it to the map
    //     // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    //     for (var i in data) {
    //       var row = data[i];

    //       var marker = L.marker([row.Latitude, row.Longitude], {
    //         opacity: 1
    //       }).bindPopup(row.Title);
          
    //       marker.addTo(map);
    //     }

    //   });

// var facilityIcon = L.Icon.extend({
//     options: {
//         iconSize: [30, 30],
//     }
// });

// var leaderIcon = new facilityIcon({iconUrl: 'design/Hospital.svg'}),
//     strikeIcon = new facilityIcon({iconUrl: 'design/Water.svg'}),
//     eventIcon = new facilityIcon({iconUrl: 'design/Plant.svg'});


}

// function sidebar() {
// // ADD CANVAS
//     let canvas = createCanvas(400, 4000);
//     canvas.parent('sidebar');
//     background('white');
//     noStroke();

//     // ADD CANVAS ELEMENTS
//         // DESCRIPTION
//         let title = createElement('h1', 'Interactive Labor Map');
//            title.parent('title');

//         let description = createElement('p', 'tktktktktktktktkt');
//            description.parent('descriptionText');
        
//         let details = createElement('p', 'tktktktktktktktktktktk');
//             details.parent('descriptionText');
//     }

}

