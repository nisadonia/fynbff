//JavaScript Document

console.log("javascript is running");

// Tabs
function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

function search() {
    var myLocation = document.getElementById("situation").value;
    openLink(event, 'Maps');
    var lat = 0;
    var lng = 0;
    if (myLocation == "beach"){
        lat = 42.57;
        lng = -70.79;
    }
    else if (myLocation == "city"){
        lat = 51.5;
        lng = -0.2;
    }
    myMap(lat, lng);
}

function zipCode(){

    openLink(event, 'Event');
}

var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', 'Title', 51.508742, -0.120850, 'eve'],
    ['1', 'Title', 51.508742, -0.110850, 'ads'],
    ['2', 'Title', 51.528742, -0.140850, 'ads'],
    ['3', 'Title', 51.518742, -0.130850, 'vop']
];

/**
 * Function to init map
 */


function myMap(lat, lng) {
    var mapCanvas = document.getElementById("map");
    var center = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: center,
        zoom: 10,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false
    };

    map = new google.maps.Map(mapCanvas, mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            //console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match
        else {
            marker.setVisible(false);
        }
    }
}





