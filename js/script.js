// Esercizio Mail

const mail = ["ginopippo@gmail.com", "nonhocreativita@gmail.com", "sonostancocapo@gmail.com"];
let mailUtente = prompt("Inserisci la tua mail");
let mailCheck = false

for(let i = 0; i < mail.length; i++) {
    if(mailUtente === mail[i]){
        mailCheck = true;
    }
}

if(mailCheck == true){
    console.log("Accesso consentito");
}
else{
    console.log("Accesso negato");
}

// Esercizio Dadi
let diceBot = Math.floor(Math.random() * 5) + 1;
let dicePlayer = Math.floor(Math.random() * 5) + 1;

if(dicePlayer > diceBot){
    console.log("Hai vinto!");
}
else if(dicePlayer == diceBot){
    console.log("Hai pareggiato");
}
else{
    console.log("Hai perso");
}

console.log("Il to numero: " + dicePlayer, "Il numero del bot: " + diceBot);