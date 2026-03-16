let termekNev = ["Kenyér", "Sonka", "Vaj", "Zsepi", "Víz", "Sampon", "Pókemberes parfüm"];
let termekAr = [500, 1000, 1200, 400, 250, 3200, 4500];
const termekekSor = document.getElementById("termekekSor");

termekNev.forEach((nev, index) => {
    if (nev == "Pókemberes parfüm") {
            termekekSor.innerHTML += `<div class="col-4 p-3"><button class="btn btn-danger container-fluid">${nev}<br>${termekAr[index]} Ft</button></div>`;

    }
    else {
    termekekSor.innerHTML += `<div class="col-4 p-3"><button class="btn btn-primary container-fluid">${nev}<br>${termekAr[index]} Ft</button></div>`;
}});


