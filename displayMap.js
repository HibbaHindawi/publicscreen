let myMap;
function init(){
    testElem= document.querySelector("#test");
    initMap("map");
}
window.addEventListener("load", init);

function initMap(id) {
    let zoomLevel = 16.75;
    myMap = L.map(id, {
        zoomControl: false,
        attributionControl: false
    }).setView([56.87921314865301, 14.806402631755892], zoomLevel);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 29,
    }).addTo(myMap);

    let cityBounds = L.latLngBounds(
        L.latLng(56.875, 14.7975), // Southwest corner
        L.latLng(56.8814, 14.812)  // Northeast corner
    );
    myMap.setMaxBounds(cityBounds);
    myMap.setMinZoom(zoomLevel);
}