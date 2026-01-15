let cookieClicks = 0;
document.getElementById("cookie_clicker").innerHTML = "Clicks: " + cookieClicks;

function buttonThatSaysHi(){
    document.getElementById("hi_text").innerHTML = "hi"
}
function incrementCookieClicker(){
    cookieClicks++;
    document.getElementById("cookie_clicker").innerHTML = "Clicks: " + cookieClicks;
}