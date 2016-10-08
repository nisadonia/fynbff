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
        lat = 25;
        lng = 80;
    }
    else if (myLocation == "city"){
        lat = 51.5;
        lng = -0.2;
    }
    myMap(lat, lng);
}


function myMap(lat, lng) {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 10,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);


}



