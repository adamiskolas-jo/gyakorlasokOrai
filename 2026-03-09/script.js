let sorszam = 1
function kuldes() {
    const beviteliMezo = document.getElementById("text");
    const tartalom = document.getElementById("tartalom")

    let szoveg = beviteliMezo.value;
    tartalom.innerHTML += `<p id="elem_${sorszam}" onclick="torol(${sorszam});">${szoveg}</p>`;
    beviteliMezo.value = ""
    sorszam += 1
}

function torol(index) {
    const torlendoParagrafus = document.getElementById("elem_"+index);
    torlendoParagrafus.remove();
}