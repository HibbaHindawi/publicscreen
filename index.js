let url = "https://smapi.lnu.se/api/?api_key=Q0wfRecE&controller=establishment&method=getall&descriptions=museum,konsthall,kyrka,biograf&cities=växjö";
let testElem;
let filterMenuElem;
let filterBtn;
let feedbackElem;
let dimElem;
let markers = L.layerGroup();
let originalList;
let categoryMenu;
let filteredList = [];
let filterArray;
let randomList = [];
let newResult = [];
let resetBtn;

// https://smapi.lnu.se/api/?api_key=Q0wfRecE&controller=establishment&method=getreviews&id=2 hämta recenssioner

function init() {
    testElem = document.querySelector("#test");
    filterBtn = document.querySelector("#filterBtn");
    filterBtn.addEventListener("click", displayFilterMenu);
    document.querySelector("#closeBtn").addEventListener("click", displayFilterMenu);
    filterMenuElem = document.querySelector("#filterMenu");
    feedbackElem = document.querySelector("#feedbacksort");
    dimElem = document.querySelector("#dimOverlay");
    dimElem.addEventListener("click", displayFilterMenu);
    categoryMenu = document.querySelector("#categoryList");
    resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener("click", filterSettings);
    document.querySelector("#randomBtn").addEventListener("click", randomPage);

    getData();
}
window.addEventListener("load", init);
window.onload = () => {
    document.getElementById('sortAlphabet').checked = true;
};

function getData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filtered_array = (data.payload).filter(place => place.name !== "Psykiatrihistoriskt museum");
            originalList = filtered_array.concat(places);
            newResult = originalList;
            sortList(newResult, 'alphabet');
            displayData(originalList);
            addFilterList();
            addMarkers();
        })
        .catch(error => {
            console.error("det uppstod ett problem: " + error);
        });
}

function displayData(data) {
    testElem.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        randomList.push(data[i].id);
        let div = document.createElement("div");
        let text = document.createElement("p");
        text.innerText = data[i].description + " - " + data[i].name + " " + data[i].price_range + " " + data[i].rating;
        div.appendChild(text);
        div.id = data[i].id;
        div.addEventListener("click", redirectPage);
        testElem.appendChild(div);
    }
    feedbackElem.innerHTML = "Resultat: <b>" + testElem.childNodes.length + "</b>";
}

function addFilterList() {
    filterArray = [];
    for (let i = 0; i < originalList.length; i++) {
        let cate = originalList[i].description;
        if (!filterArray.includes(cate)) {
            let div = document.createElement("div");
            div.innerText = cate;
            div.id = cate;
            div.addEventListener("click", filterSettings);
            filterArray.push(cate);
            categoryMenu.appendChild(div);
        }
    }
}

function filterSettings() {
    newResult = [];
    testElem.innerHTML = "";
    if (this.id !== "resetBtn") {
        if (filteredList.includes(this.id)) {
            for (let i = 0; i < filteredList.length; i++) {
                if (filteredList[i] == this.id) {
                    filteredList.splice(i, 1);
                    this.classList.remove('active');
                }
            }
        }
        else {
            filteredList.push(this.id);
            this.classList.add('active');
        }
        for (let i = 0; i < originalList.length; i++) {
            if (filteredList.includes(originalList[i].description)) {
                newResult.push(originalList[i]);
            }
        }
        markers.clearLayers();
        for (let i = 0; i < newResult.length; i++) {
            let lat;
            let lng;
            let button = document.createElement("a");
            let currentData = newResult[i];
            button.href = "information.html?id=" + currentData.id;
            button.innerText = "Läs mer här";
            if (currentData.name == "Palladium") {
                lat = 56.878800803815544;
                lng = 14.806743264198305;
            }
            else if (currentData.name == "Filmstaden Växjö") {
                lat = 56.878878604985736;
                lng = 14.797926843166353;
            }
            else {
                lat = currentData.lat;
                lng = currentData.lng;
            }
            let marker = L.marker([lat, lng]);
            marker.bindPopup("<b>" + currentData.name + "</b><br> Typ: " + currentData.description + "<br>" + button.outerHTML);
            markers.addLayer(marker);
        }
        markers.addTo(myMap);
    }
    else {
        const divs = categoryMenu.children;
        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove('active');
        }
        filteredList = [];
        addMarkers();
    }
    if (newResult.length == "0") {
        newResult = originalList;
        resetBtn.style.backgroundColor = "white";
    }
    else{
        resetBtn.style.backgroundColor = "gray";
    }
    sortOption();
}
function sortOption() {
    const selectedMethod = document.querySelector('input[name="sortOptions"]:checked').value;
    newResult = sortList(newResult, selectedMethod);
    displayData(newResult);
}

function addMarkers() {
    markers.clearLayers();
    for (let i = 0; i < originalList.length; i++) {
        let lat;
        let lng;
        let button = document.createElement("a");
        let currentData = originalList[i];
        button.href = "information.html?id=" + currentData.id;
        button.innerText = "Läs mer här";
        if (currentData.name == "Palladium") {
            lat = 56.878800803815544;
            lng = 14.806743264198305;
        }
        else if (currentData.name == "Filmstaden Växjö") {
            lat = 56.878878604985736;
            lng = 14.797926843166353;
        }
        else {
            lat = currentData.lat;
            lng = currentData.lng;
        }
        let marker = L.marker([lat, lng]);
        marker.bindPopup("<b>" + currentData.name + "</b><br> Typ: " + currentData.description + "<br>" + button.outerHTML);
        markers.addLayer(marker);
    }
    markers.addTo(myMap);
}
function randomPage() {
    const lastId = localStorage.getItem('lastId'); // Get the last used ID from localStorage
    let randomId;

    do {
        const randomIndex = Math.floor(Math.random() * randomList.length);
        randomId = randomList[randomIndex];
    } while (randomId === lastId); // Check if it's the same as the last one

    localStorage.setItem('lastId', randomId);
    window.location.href = "information.html?id=" + randomId;
}

function redirectPage() {
    let id = this.id;
    window.location.href = "information.html?id=" + id;
}

function displayFilterMenu() {
    let filterWidth = "30%";
    if (filterMenuElem.style.width == filterWidth) {
        filterMenuElem.style.width = "0";
        filterMenuElem.style.borderWidth = "0px";
        dimElem.style.opacity = "0";
        dimElem.style.width = "0";
    }
    else {
        filterMenuElem.style.width = filterWidth;
        filterMenuElem.style.borderWidth = "1px";
        dimElem.style.opacity = "0.5";
        dimElem.style.width = "75%";
    }
}

function sortList(sortedList, method) {
    switch (method) {
        case 'alphabet':
            sortedList.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA.localeCompare(nameB);
            });
            break;

        case 'price':
            const getLowerPrice = (price) => {
                if (price.includes('-')) {
                    return parseInt(price.split('-')[0]);
                }
                return parseInt(price);
            };
            sortedList.sort((a, b) => {
                const priceA = getLowerPrice(a.price_range);
                const priceB = getLowerPrice(b.price_range);

                // Treat the price '0' as definitely lower than any range starting from '0'
                if (priceA === 0 && b.price_range.includes('-')) {
                    return -1;
                }
                if (priceB === 0 && a.price_range.includes('-')) {
                    return 1;
                }
                return priceA - priceB;
            });
            break;

        case 'rating':
            sortedList.sort((a, b) => b.rating - a.rating);
            break;

        case 'distance':
            const userPosition = { latitude: 51.5074, longitude: -0.1278 }; //ändra till aktuell position
            const haversineDistance = (lat1, lon1, lat2, lon2) => {
                const R = 6371;
                const dLat = (lat2 - lat1) * (Math.PI / 180);
                const dLon = (lon2 - lon1) * (Math.PI / 180);
                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return R * c;
            };

            sortedList.sort((a, b) => {
                const distanceA = haversineDistance(userPosition.latitude, userPosition.longitude, a.lat, a.lng);
                const distanceB = haversineDistance(userPosition.latitude, userPosition.longitude, b.lat, b.lng);
                return distanceA - distanceB;
            });
            break;

        default:
            console.log('Unknown sorting method');
            break;
    }
    return sortedList;
}
function reverseList(){
    newResult = newResult.reverse();
    displayData(newResult);
}