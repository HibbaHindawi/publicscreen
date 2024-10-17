let url = "https://smapi.lnu.se/api/?api_key=Q0wfRecE&controller=establishment&method=getall&ids=1"
let testElem;
let filterMenuElem;
let filterBtn;
let feedbackElem;

// https://smapi.lnu.se/api/?api_key=Q0wfRecE&controller=establishment&method=getreviews&id=2 hämta recenssioner

function init(){
    testElem= document.querySelector("#test");
    filterBtn = document.querySelector("#filterBtn");
    filterBtn.addEventListener("click", displayFilterMenu);
    document.querySelector("#closeBtn").addEventListener("click", displayFilterMenu);
    filterMenuElem = document.querySelector("#filterMenu");
    feedbackElem = document.querySelector("#feedbacksort");
    getData();
}
window.addEventListener("load", init);

function getData(){
    /*fetch(url)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error("det uppstod ett problem: " + error);
        });*/
    displayData();
}

function displayData(data){
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        let text = document.createElement("p");
        text.innerText = "Platsnamn - Kategori";
        div.appendChild(text);
        testElem.appendChild(div);
    }
    feedbackElem.innerText = "Resultat: " + testElem.childNodes.length;
    //testElem.innerText = data.payload[0].name;
}
function displayFilterMenu() {
    if(filterMenuElem.style.width == "25%"){
        filterBtn.style.backgroundColor = "";
        filterMenuElem.style.width = "0";
        filterBtn.style.color = "";
    }
    else{
        filterMenuElem.style.width = "25%";
        filterBtn.style.backgroundColor = "black";
        filterBtn.style.color = "white";
    }
}