let sorszam = 1
let osszeg = 0
const arLista = []
let osszegHely = document.getElementById("osszegHely")

function kuldes() {
    const nev = document.getElementById("termek");
    const ar = parseInt(document.getElementById("ar").value);
    const tablaTest = document.getElementById("tablaTest")
    const hibaHely = document.getElementById("hibaHely")


    if (nev.value == "") {
        hibaHely.innerHTML = `<div class="alert alert-danger" role="alert">
  Nem adtál meg termék nevet!
</div>`}



    else if (isNaN(ar)) {
        hibaHely.innerHTML = `<div class="alert alert-danger" role="alert">
  Nem egész számot adtál meg!!!!
</div>`
    }
    else {
        hibaHely.innerHTML = ""
        tablaTest.innerHTML += `<tr id="sor_${sorszam}"><td>${nev.value}</td><td>${ar}</td><td onclick="torolSor(${sorszam})">X</td></tr>`
        sorszam += 1;

        osszeg = osszeg + ar;
        arLista.push(ar)
        osszegHely.innerHTML = `<p class="text-center">Összesen: ${osszeg} Ft</p>`;
    }
}

function torolSor(index) {
    const torlendoSor = document.getElementById("sor_" + index);
    torlendoSor.remove();
    osszeg -= arLista[(index - 1)];
    osszegHely.innerHTML = `<p class="text-center">Összesen: ${osszeg} Ft</p>`;

}

