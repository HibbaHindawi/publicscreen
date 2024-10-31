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
const excludedIds = ['1', '2', '3', '4'];
let newInfo;
let markerMenu;
let openBtn;
let sortBtn;
let reverseBtn;
let status;

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
    sortBtn = document.querySelector("#sortBtn");
    sortBtn.addEventListener("click", showSortList);
    document.querySelector("#student_discount").addEventListener("click", filterSettings);
    document.querySelector("#child_discount").addEventListener("click", filterSettings);
    document.querySelector("#senior_discount").addEventListener("click", filterSettings);
    markerMenu = document.querySelector("#markerDesc");
    document.querySelector("#closeBtnMarker").addEventListener("click", displayMarkerMenu);
    openBtn = document.querySelector("#openBtn");
    openBtn.addEventListener("click", displayMarkerMenu);
    reverseBtn = document.querySelector("#reverseBtn img");
    reverseBtn.src = "images/reverse.png";
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
            originalList = updateInfo(originalList);
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
function updateInfo(data) {
    for (let i = 0; i < data.length; i++) {
        if (!excludedIds.includes(data[i].id)) {
            let newInfo = getReviews(data[i].id);
            data[i].rating = parseFloat(newInfo.rating).toFixed(1);
        }
    }
    return data;
}

function getReviews(id) {
    return updatedInfo.find(place => place.id === id);
}

function displayData(data) {
    testElem.innerHTML = "";
    if (data == 0) {
        testElem.innerHTML = "<p id='errormsg'>Det finns inga resultat, testa byta filter.</p>";
        feedbackElem.innerHTML = "Resultat: <b> 0 </b>";
    }
    else {
        for (let i = 0; i < data.length; i++) {
            randomList.push(data[i].id);
            let div = document.createElement("div");
            let title = document.createElement("p");
            let image = document.createElement("img");
            image.src = "images/" + data[i].description + ".png";
            image.alt = data[i].description;
            title.innerHTML = "<b>" + data[i].name + "</b><br>" + data[i].price_range + " kr";;
            let ratingElem = document.createElement("div");
            ratingElem.innerHTML = "<p>" + data[i].rating + "</p><img src='images/rating.png' alt='betyg'>";
            title.id = "titleElem";
            ratingElem.id = "ratingElem";
            div.appendChild(image);
            div.appendChild(title);
            div.appendChild(ratingElem);
            div.id = data[i].id;
            div.addEventListener("click", redirectPage);
            testElem.appendChild(div);
        }
        feedbackElem.innerHTML = "Resultat: <b>" + testElem.childNodes.length + "</b>";
    }
}

function addFilterList() {
    filterArray = [];
    for (let i = 0; i < originalList.length; i++) {
        let cate = originalList[i].description;
        if (!filterArray.includes(cate)) {
            let div = document.createElement("div");
            div.innerHTML = "<p>" + cate + "</p><img src=images/" + cate + ".png>";
            div.id = cate;
            div.addEventListener("click", filterSettings);
            filterArray.push(cate);
            categoryMenu.appendChild(div);
        }
    }
}

function filterSettings() {
    if (this.classList.contains("disabled")) {
        return;
    }
    else {
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
            if (newResult.length == "0") {
                newResult = originalList;
            }
            if (filteredList.includes("student_discount")) {
                newResult = newResult.filter(item => item.student_discount === "Y");
            }
            if (filteredList.includes("child_discount")) {
                newResult = newResult.filter(item => item.child_discount === "Y");
            }
            if (filteredList.includes("senior_discount")) {
                newResult = newResult.filter(item => item.senior_discount === "Y");
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
                let marker;
                if (currentData.description == "Konsthall") {
                    marker = L.marker([lat, lng], { icon: konsthallMarker });
                }
                else if (currentData.description == "Museum") {
                    marker = L.marker([lat, lng], { icon: museumMarker });
                }
                else if (currentData.description == "Konserthus") {
                    marker = L.marker([lat, lng], { icon: konserthusMarker });
                }
                else if (currentData.description == "Kyrka") {
                    marker = L.marker([lat, lng], { icon: kyrkaMarker });
                }
                else if (currentData.description == "Biograf") {
                    marker = L.marker([lat, lng], { icon: biografMarker });
                }
                else if (currentData.description == "Teater") {
                    marker = L.marker([lat, lng], { icon: teaterMarker });
                }
                else {
                    marker = L.marker([lat, lng], { icon: bibliotekMarker });
                }
                var redirectUrl = "information.html?id=" + currentData.id;
                var placeName = currentData.name;
                if (placeName.includes(" ")) {
                    placeName = placeName.replace(" ", "<br>");
                }
                marker.bindPopup("<a href='" + redirectUrl + "' style='text-decoration: none; color: black; max-width: 140px; display: block; word-wrap: break-word;'><strong>" + placeName + "</strong><br><p class='link'><u>Läs mer</u></p></a>");
                markers.addLayer(marker);
                var popupContainer = document.querySelector('.leaflet-popup-content-wrapper');
                if (popupContainer) {
                    popupContainer.style.maxWidth = '135px'; // Adjust as needed
                    popupContainer.style.whiteSpace = 'normal'; // Allow text to wrap
                }
            }
            markers.addTo(myMap);
        }
        else {
            const divs = categoryMenu.children;
            const rabatterDiv = document.querySelectorAll("#discountsList div");
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.remove('active');
            }
            for (let i = 0; i < rabatterDiv.length; i++) {
                rabatterDiv[i].classList.remove('active');
            }
            filteredList = [];
            addMarkers();
        }
        if (newResult.length == "0" && this.id == "resetBtn") {
            newResult = originalList
            resetBtn.style.backgroundColor = "rgb(215, 215, 215)";
            resetBtn.classList.add("disabled");
            resetBtn.style.color = "gray";
        }
        else if (newResult.length == "0") {
            resetBtn.style.backgroundColor = "white";
            resetBtn.style.color = "black";
            resetBtn.classList.remove("disabled");
            displayData(0);
        }
        else if (filteredList.length == "0") {
            newResult = originalList
            resetBtn.style.backgroundColor = "rgb(215, 215, 215)";
            resetBtn.classList.add("disabled");
            resetBtn.style.color = "gray";
        }
        else {
            resetBtn.style.backgroundColor = "white";
            resetBtn.style.color = "black";
            resetBtn.classList.remove("disabled");
        }
        sortOption();
    }
}
function sortOption() {
    const selectedMethod = document.querySelector('input[name="sortOptions"]:checked').value;
    newResult = sortList(newResult, selectedMethod);
    reverseBtn.src = "images/reverse.png";
    status = "unreversed";
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
        let marker;
        if (currentData.description == "Konsthall") {
            marker = L.marker([lat, lng], { icon: konsthallMarker });
        }
        else if (currentData.description == "Museum") {
            marker = L.marker([lat, lng], { icon: museumMarker });
        }
        else if (currentData.description == "Konserthus") {
            marker = L.marker([lat, lng], { icon: konserthusMarker });
        }
        else if (currentData.description == "Kyrka") {
            marker = L.marker([lat, lng], { icon: kyrkaMarker });
        }
        else if (currentData.description == "Biograf") {
            marker = L.marker([lat, lng], { icon: biografMarker });
        }
        else if (currentData.description == "Teater") {
            marker = L.marker([lat, lng], { icon: teaterMarker });
        }
        else {
            marker = L.marker([lat, lng], { icon: bibliotekMarker });
        }
        var redirectUrl = "information.html?id=" + currentData.id;
        var placeName = currentData.name;
        if (placeName.includes(" ")) {
            placeName = placeName.replace(" ", "<br>");
        }
        marker.bindPopup("<a href='" + redirectUrl + "' style='text-decoration: none; color: black; max-width: 140px; display: block; word-wrap: break-word;'><strong>" + placeName + "</strong><br><p class='link'><u>Läs mer</u></p></a>");
        markers.addLayer(marker);
        var popupContainer = document.querySelector('.leaflet-popup-content-wrapper');
        if (popupContainer) {
            popupContainer.style.maxWidth = '135px'; // Adjust as needed
            popupContainer.style.whiteSpace = 'normal'; // Allow text to wrap
        }
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
    let filterBtnImg = filterBtn.children[0];
    if (filterMenuElem.style.width == filterWidth) {
        filterMenuElem.style.width = "0";
        filterMenuElem.style.borderWidth = "0px";
        dimElem.style.opacity = "0";
        dimElem.style.width = "0";
        filterBtnImg.src = "images/filter.png";
    }
    else {
        filterMenuElem.style.width = filterWidth;
        filterMenuElem.style.borderWidth = "1px";
        dimElem.style.opacity = "0.5";
        dimElem.style.width = "100%";
        filterBtnImg.src = "images/filteractive.png";
    }
}
function displayMarkerMenu() {
    let markerWidth = "400px";
    if (markerMenu.style.width == markerWidth) {
        markerMenu.style.width = "0";
        openBtn.style.display = "block";
    }
    else {
        markerMenu.style.width = markerWidth;
        openBtn.style.display = "none";
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

        case 'category':
            sortedList.sort((a, b) => {
                const nameA = a.description.toLowerCase();
                const nameB = b.description.toLowerCase();
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

        default:
            console.log('Unknown sorting method');
            break;
    }
    return sortedList;
}
function reverseList() {
    if(status == "reversed"){
        reverseBtn.src = "images/reverse.png";
        status = "unreversed";
        newResult = newResult.reverse();
    }
    else{
        reverseBtn.src = "images/reverseactive.png";
        status = "reversed";
        newResult = newResult.reverse();
    }
    displayData(newResult);
}

function showSortList() {
    let list = document.querySelector("#sortingDivs");
    let sortBtnimg = sortBtn.children[0];
    if (list.style.visibility === 'visible') {
        list.style.visibility = 'hidden';
        sortBtnimg.src = "images/sort.png";
    } else {
        list.style.visibility = 'visible';
        sortBtnimg.src = "images/sortactive.png";
    }
}