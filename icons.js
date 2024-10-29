//Ikoner
let icons = L.Icon.extend({ //Skapar inställningar för ikoner
    options: {
        iconSize: [60, 85],
        iconAnchor: [30, 85],
        popupAnchor: [0, -50]
    }
});
let userPosition = new icons({
    iconUrl: "images/userPosition.png"
});
let museumMarker = new icons({
    iconUrl: "images/museumMarker.png"
});
let konserthusMarker = new icons({ //Ikon för slott
    iconUrl: "images/konserthusMarker.png"
});
let kyrkaMarker = new icons({ // Ikon för kyrka
    iconUrl: "images/kyrkaMarker.png"
});
let bibliotekMarker = new icons({ //Ikon för fornlämningar
    iconUrl: "images/bibliotekMarker.png"
});
let konsthallMarker = new icons({ //ikon för konstgalleri
    iconUrl: "images/konsthallMarker.png"
});
let biografMarker = new icons({ //Ikon för biograf
    iconUrl: "images/biografMarker.png"
});
let teaterMarker = new icons({
    iconUrl: "images/teaterMarker.png"
});