let huto = ["Tej", "Tojás", "Sajt"];

huto.push("Joghurt");
console.log(huto);

const hutomUI = document.getElementById("hutom");

huto.forEach((ertek, index) => {
    hutomUI.innerHTML += `<li>${index}. ${ertek}</li>`
});