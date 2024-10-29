let myMap;
function init(){
    testElem = document.querySelector("#test");
    initMap("map");
}
window.addEventListener("load", init);

function initMap(id) {
    let zoomLevel = 16.5;
    myMap = L.map(id, {
        zoomControl: false,
        attributionControl: false
    }).setView([56.87921314865301, 14.806402631755892], zoomLevel);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 29,
    }).addTo(myMap);

    let cityBounds = L.latLngBounds(
        L.latLng(56.8755, 14.797), // Southwest corner
        L.latLng(56.88155, 14.813)  // Northeast corner
    );
    myMap.setMaxBounds(cityBounds);
    myMap.setMinZoom(zoomLevel);
    let marker = L.marker([56.878938, 14.804549], { icon: userPosition });
    marker.addTo(myMap);
}