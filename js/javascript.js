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


function myMap(lat, lng) {
    var mapCanvas = document.getElementById("map");
    var uluru = {lat: 51.508742, lng: -0.120850};
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



    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru Dog Meet & Greet</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Location:</b> London Pier </p>' +
        '<p><b>Date:</b> Today from noon to midnight</p>' +
        '<p>Facebook Event Link</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}



