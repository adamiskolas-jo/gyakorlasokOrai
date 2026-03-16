let termekNev = ["Kenyér", "Sonka", "Vaj", "Zsepi", "Víz"];
let termekAr = [500, 1000, 1200, 400, 250];
const termekekSor = document.getElementById("termekekSor");

termekNev.forEach((nev, index) => {
    termekekSor.innerHTML += `<button class="btn btn-success mt-2">${nev} <sub>${termekAr[index]} Ft</sub></button>`;
});


