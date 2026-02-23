const API_URL = "https://api.sampleapis.com/beers/ale";

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        if (response.ok === false) {
            console.log("Valami hiba történt a szerverrel")
            return;
        }
        else {
            const data = await response.json();
            displayData(data);
        }
    }
    catch (error) {
        console.log("Hálózati hiba történt", error)
    }
}



function displayData(beers) {
    const tartalom = document.getElementById("tablaTartalom")
    tartalom.innerHTML = "";
    beers.forEach(function (beer) {
        const sorTartalom = `
          <tr>
            <td>${beer.id}</td>
            <td>${beer.name}</td>
            <td>${beer.rating.average}</td>
            <td><img src="${beer.image}" class="img-fluid" alt="${beer.name} kép" title="${beer.name} kép"></td>
            <td>${beer.price}</td>
            </tr>
        `;
        tartalom.innerHTML += sorTartalom;
    });
}
fetchData();