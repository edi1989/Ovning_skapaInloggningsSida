// ****** Start variabler ****** //

var username = "test" //Specifikt användarnamn
var password = "1234" //Specifikt lösenord

var userelement = document.getElementById("username") // Hämtar inputfältet för username
var passwordelement = document.getElementById("password") // Hämtar inputfältet för password

var loggainsection = document.getElementById("loggainsection") // Variabel för att hämta inloggningssidan "loggainsection"
var loggedin = document.getElementById("loggedin") // Variabel för att hämta sidan "loggedin" vid rätt lösenord
var failed = document.getElementById("failed") // Variabel för att hämta sidan "failed" vid fel lösenord

var userinloggad = localStorage.getItem("inloggad"); // Hämta localstorage information

// ****** Slut variabler ****** //

// ****** Start IF funktion om inloggad/om inte inloggad ****** //

if (userinloggad) {
    loggainsection.style.display = "none"; //Om inloggad, göm sidan med inmatningsfält
    failed.style.display = "none"; //Om inloggad, göm fel lösenord sidan
    loggedin.style.display = "block"; //Om inloggad, visa välkommen-sidan
} else {
    loggainsection.style.display = "block"; //Om ej inloggad, visa startsidan sidan med inmatningsfält
    failed.style.display = "none"; //Om ej inloggad, göm fel lösenord sidan
    loggedin.style.display = "none"; //Om ej inloggad, göm välkommen-sidan om rätt anvnamn och lösenord
}
// ****** Slut IF funktion om inloggad/om inte inloggad ****** //

// ****** Start funktion för logga ut ****** //

function loggaut() { 
    localStorage.clear(); // Rensa localStorage
    failed.style.display = "none"; //Gömmer fel lösenord sidan
    loggedin.style.display = "none"; //Gömmer välkommen-sidan
    loggainsection.style.display = "block"; //Visar sidan med inmatningsfält
}
// ****** Slut funktion för logga ut ****** //


// ****** Start funktion för logga in ****** //

function login() { 
    loggainsection.style.display = "none"; //Gömmer välkommen-sidan om rätt anvnamn och lösenord

    if(userelement.value === username && passwordelement.value === password) //IF funktion för att kontrollera att username = test samt password = 1234 är korrekt
    {
        localStorage.setItem("inloggad", true); //Sparar localStorage information
        loggedin.style.display = "block"; //Om rätt användaruppgift och lösenord, visar välkommen-sidan
    }
     else
    {
        failed.style.display = "block"; //Om fel användaruppgift och/eller lösenord, visar fel lösenord sidan
    }
}
// ****** Slut funktion för logga in ****** //