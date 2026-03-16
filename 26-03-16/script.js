let huto = ["Tej", "Tojás", "Sajt"];

huto.push("Joghurt");
console.log(huto);

const hutomUI = document.getElementById("hutom");

let i = 0
huto.forEach((ertek) => {
    hutomUI.innerHTML += `<li>${ertek}</li>`
});