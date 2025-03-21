// Esercizio Mail

const mail = ["ginopippo@gmail.com", "nonhocreativita@gmail.com", "sonostancocapogmail.com"];
let mailUtente = prompt("Inserisci la tua mail");
let mailCheck = false

for(let i = 0; i<mail.length; i++) {
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

