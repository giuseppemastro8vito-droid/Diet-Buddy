const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

const oggi = new Date();
const numeroGiorno = oggi.getDay();

const nomeGiorno = giorni[numeroGiorno];

document.getElementById("giorno").textContent = "Oggi è " + nomeGiorno;

console.log("FUNZIONA");
