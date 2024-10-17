let myMap;
function init(){
    testElem= document.querySelector("#test");
    initMap("map");
}
window.addEventListener("load", init);

function initMap(id) {
    myMap = L.map(id, {
        zoomDelta: 1,
        zoomSnap: 0.35,
        zoomControl: false
    }); //Ändra koordinater för att byta det som visas på kartan, sista värdet är zoom värdet, minska för att zooma ut och tvärtom
    myMap.setView([56.89, 14.80], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(myMap);
}