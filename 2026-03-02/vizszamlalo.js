function vizigenyBekuld() {
    const testtomeg = parseFloat(document.getElementById("testtomeg").value);
    const sportolasMennyiseg = parseInt(document.getElementById("sportolasMennyiseg").value);
    const idojaras = document.getElementById("idojaras").value;
    const vizTartalom = document.getElementById("vizTartalom");

    vizIgeny = testtomeg * 0.035
    sportolas30p = parseInt(sportolasMennyiseg / 30)
    vizIgeny += sportolas30p * 0.35

   if (idojaras == "forro") {
        vizIgeny += 0.5
    }

    vizTartalom.innerHTML = `A Te vízigényed a megadott körülmények között: ${vizIgeny} Liter`
}