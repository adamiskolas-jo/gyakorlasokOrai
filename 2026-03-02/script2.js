function bekuld() {
    const szoveg = document.getElementById("szoveg");
    const tartalom = document.getElementById("tartalom");

    /* tartalom.innerHTML = szoveg.value; */
    tartalom.innerHTML += `<p>${szoveg.value}</p>`;
    szoveg.value = ""
}

szoveg.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (szoveg.value != "") {
            document.getElementById("bekuldGomb").click();
        }
        else {
            document.getElementById("bmiBekuld").click();
        }
    }
});

function bmiBekuld() {
    const testtomeg = parseFloat(document.getElementById("testtomeg").value);
    const testmagassag = parseFloat(document.getElementById("testmagassag").value / 100);
    const bmiTartalom = document.getElementById("bmiTartalom")

    const BMI = testtomeg / (testmagassag * testmagassag)

    if (BMI < 18.5) {
        bmiTartalom.innerHTML = `<p>Sovány (${BMI})</p>`;
    }
    else if (18.5 <= BMI && BMI <= 25) {
        bmiTartalom.innerHTML = `<p>Normál testsúly (${BMI})</p>`;
    }
    else if (25 < BMI && BMI <= 30) {
        bmiTartalom.innerHTML = `<p>Túlsúly testsúly (${BMI})</p>`;
    }
    else if (BMI > 30) { /* VAGY ELSE */
        bmiTartalom.innerHTML = `<p>Elhízás (${BMI})</p>`;
    }
}