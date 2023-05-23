"use strict";
$(function () {

    $("#pwc_screen").fadeIn(500);

    let pwcPage = document.getElementById("pwc_screen");

    let welcomeText = ["MAKE A PASSWORD", "IT'LL BE YOUR OWN SECRET PASSWORD",
                       "MAKE IT SOMETHING FANCY", "IF YOU WANT..", "BECAUSE YOU WON'T BE ABLE TO CHANGE IT LATER.",
                       "AT LEAST FOR NOW."];

    function TextDisplay () {
        let i = 0;
        pwcPage.firstElementChild.textContent = welcomeText[i];
        window.setInterval(function() {
                i++;
                if (i > welcomeText.length) {
                    i = 0;
                    pwcPage.firstElementChild.textContent = welcomeText[i];
                } else {
                    pwcPage.firstElementChild.textContent = welcomeText[i];
                }
        }, 7000);
    }

    /*
        PASSWORD SETTER
        The following Event Listener checks if the input field is empty or not. IF the
        input field is empty, it gives the user a red warning, ELSE it will store the
        new password in local storage using the Web Storage API, then it will take the
        user back to the sign in page (index.html).
    */
    document.getElementById("pwcbutton").addEventListener("click", function () {
        if (document.querySelector("input").value == "" || document.querySelector("input").value == " ") {
            document.getElementById("pwc_info_snippet").style.color = "red";
            document.getElementById("pwc_info_snippet").textContent = "You can't have ' ' for a password -_-";
        } else {
            localStorage.setItem("password", document.querySelector("input").value);

            document.getElementById("pwc_screen_text").textContent = "GREAT, LET'S GO BACK!";
            document.getElementById("pwc_info_snippet").style.color = "grey";
            document.getElementById("pwc_info_snippet").textContent = "Good :)";

            window.setTimeout(function () {
                $("#pwc_screen").fadeOut(700);
            }, 1000);

            window.setTimeout(function () {
                window.location.href = "./index.html";
            }, 1700);
        }
    });

    TextDisplay();
});