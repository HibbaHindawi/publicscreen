let url = "https://smapi.lnu.se/api/?api_key=Q0wfRecE&controller=establishment&method=getall&ids=";
let mainAreaElem;
let sideAreaElem;
let placeData;
const excludedIds = ['1', '2', '3', '4'];

function init() {
    mainAreaElem = document.querySelector("#mainArea");
    sideAreaElem = document.querySelector("#sideInfo");
    fetchData();
}
window.addEventListener("load", init);

function getIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function fetchData() {
    const currentId = getIdFromUrl();

    if (!excludedIds.includes(currentId)) {
        fetch(url + currentId)
            .then(response => response.json())
            .then(data => {
                displayData(data.payload[0]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        let place = getPlaceById(currentId);
        displayData(place);
    }
}
function getPlaceById(id) {
    return places.find(place => place.id === id);
}
function getReviews(id) {
    return updatedInfo.find(place => place.id === id);
}

function displayData(data) {
    let newInfo;
    let abstract;
    let rating;
    let student_discount = data.student_discount;
    let child_discount = data.child_discount;
    let senior_discount = data.senior_discount;
    if (!excludedIds.includes(data.id)) {
        newInfo = getReviews(data.id);
        abstract = newInfo.abstract;
        rating = parseFloat(newInfo.rating).toFixed(1);
    }
    else{
        abstract = data.abstract;
        rating = parseFloat(data.rating).toFixed(1);
    }
    placeData = data;
    h1 = document.querySelector("#title");
    h1.innerText = data.name;
    let textP = document.createElement("p");
    textP.innerText = abstract;
    mainAreaElem.appendChild(textP);
    let otherDiv = document.createElement("div");
    let price = data.price_range;
    if (price == "0") {
        price = "Gratis";
    }
    else {
        price += "kr";
    }
    otherDiv.id = "otherDiv";
    let h2Pris = document.createElement("h2");
    h2Pris.innerText = "Pris och Rabatter";
    let discountsDiv = document.createElement("div");
    discountsDiv.id = "Discounts";
    if(student_discount == "Y"){
        discountsDiv.innerHTML = "<div id=student>Student: Yes </div>";
    }
    else{
        discountsDiv.innerHTML = "<div id=student>Student: No </div>";
    }
    if(child_discount == "Y"){
        discountsDiv.innerHTML += "<div id=child>Barn: Yes </div>";
    }
    else{
        discountsDiv.innerHTML += "<div id=child>Barn: No </div>";
    }
    if(senior_discount == "Y"){
        discountsDiv.innerHTML += "<div id=senior>Pensionär: Yes </div>";
    }
    else{
        discountsDiv.innerHTML += "<div id=senior>Pensionär: No </div>";
    }
    otherDiv.appendChild(h2Pris);

    let priceEle = document.createElement("p");
    priceEle.innerText = price;
    otherDiv.appendChild(priceEle);
    otherDiv.appendChild(discountsDiv);

    let h2Grade = document.createElement("h2");
    h2Grade.innerText = "Betyg och recensioner";
    otherDiv.appendChild(h2Grade);
    

    let gradeEle = document.createElement("p");
    gradeEle.innerText = rating;
    otherDiv.appendChild(gradeEle);

    let reviewsEle = document.createElement("div");
    reviewsEle.id = "reviewsDiv";
    if (!excludedIds.includes(data.id)) {
        for (let i = 0; i < newInfo.reviews.length; i++) {
            let review = newInfo.reviews[i];
            let reviewDiv = document.createElement("div");
            reviewDiv.innerHTML = "<p>" + review.username + " - " + review.rating + "</p><p>" + review.comment + "</p>";
            reviewDiv.classList.add("review");
            reviewsEle.appendChild(reviewDiv);
        }
    }
    else {
        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i];
            let reviewDiv = document.createElement("div");
            reviewDiv.innerHTML = "<p>" + review.username + " - " + review.rating + "</p><p>" + review.comment + "</p>";
            reviewDiv.classList.add("review");
            reviewsEle.appendChild(reviewDiv);
        }
    }
    otherDiv.appendChild(reviewsEle);
    mainAreaElem.appendChild(otherDiv);
    let phone_number;
    if(data.name === "Filmstaden Växjö"){
        phone_number = "08-562 600 00";
    }
    else if(data.name === "Palladium"){
        phone_number = "070-567 10 07";
    }
    else{
        phone_number = data.phone_number;
    }
    contactDiv = document.createElement("div");
    contactDiv.innerHTML = "<h2>Kontaktinformation</h2><div><p><img src='images/address.png'>" + data.address + "</p><p><img src='images/website.png'>" + data.website + "</p><p><img src='images/phone.png'>" + phone_number + "</p></div>";
    sideAreaElem.appendChild(contactDiv);
    displayMap();
}

function displayMap() {
    let zoomLevel = 17.5;
    let lat = placeData.lat;
    let lng = placeData.lng;
    if (placeData.name == "Palladium") {
        lat = 56.878800803815544;
        lng = 14.806743264198305;
    }
    else if (placeData.name == "Filmstaden Växjö") {
        lat = 56.878878604985736;
        lng = 14.797926843166353;
    }
    let myMap = L.map("map", {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        touchZoom: false,
        doubleClickZoom: false,
        attributionControl: false
    }).setView([lat, lng], zoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 29,
    }).addTo(myMap);

    let marker = L.marker([lat, lng]);
    marker.addTo(myMap);
}