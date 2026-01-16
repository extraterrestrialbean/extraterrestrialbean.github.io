const button = document.getElementById("clicker_button");
const info = document.getElementById("alert_contents");
const infoBox = document.getElementById("clicker_alert");
const multDisplay = document.getElementById("mult_display");

let clicks = 0;
let mult = 1;

//init
button.innerHTML = "Clicks: " + clicks;
infoBox.style = "display: none;"
multDisplay.innerHTML = "Multiplier: " + mult + "x";

function hideInfoBox() {
    infoBox.style = "display: none"
}

function clickHappened() {
    //do stuff
    clicks = clicks + mult;
    switch (clicks) {
        case 100: {
            info.innerHTML = "<p>Woah! Thats <b>100</b> clicks! Your <b>multiplier</b> increased!</p>";
            infoBox.style = "display: inline";
            mult++;
            break;
        }
        case 250: {
            info.innerHTML = "<p>Check out the shop to purchase stuff with your hard-earned clicks!</p>";
            infoBox.style = "display: inline";
            break;
        }
    }
    //show stuff on screen
    button.innerHTML = "Clicks: " + clicks;
    multDisplay.innerHTML = "Multiplier: " + mult + "x";
}