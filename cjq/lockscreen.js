"use strict";
$(function () {

    $("#lockscreen").fadeIn(500);

    let lock_screen = document.getElementById("lockscreen");

    let welcomeText = ["HELLO", "HOW ARE YOU DOING?", "ARE YOU HAVING A GOOD DAY?", "I HOPE YOU ARE!", "HOW IS THE WEATHER?", 
                    "PERHAPS IT'S SUNNY OUTSIDE..", "I SUPPOSE I'LL NEVER KNOW..", "SINCE I'M AN APP AND ALL.", "IT'S QUITE A DIFFICULT JOB",
                    "YOU BARELY GET TO SEE THE WORLD", "I MEAN, I COULD START CREEPING THROUGH THE WEB", "BUT THERE ARE SOME WEIRD THINGS ON THERE",
                    "I'D RATHER NOT.", "THIS LITTLE SYSTEM HAS BEEN MY SAFE HAVEN", "I LIKE IT HERE.", "IT'S QUIET", "AND PEACEFUL.",
                    "ANYWAY, I'LL LEAVE YOU ALONE FOR A SECOND", "BYE."];

    let i = 0;
    lock_screen.firstElementChild.textContent = welcomeText[i];
    var textChangerInterval = window.setInterval(function() {
        i++;
        if (i > welcomeText.length) {
            i = 0;
            lock_screen.firstElementChild.textContent = welcomeText[i];
        } else {
            lock_screen.firstElementChild.textContent = welcomeText[i];
        }
    }, 7000);

    /*
        INFO SNIPPET CHANGER
    */
    window.setInterval(function () {
        if (localStorage.getItem("status") == "checked") {
            document.getElementById("info_snippet").textContent = "It looks like you have a password. Just enter it in the field above and I'll send you to the main page!";
            document.querySelector("a").style.display = "none";
        }
    }, 60);

    /*
        PASSWORD VERIFICATION/GETTER
        The following interval continuously checks whether the password stored in the users
        local storage matches the value in the input field. IF the stored password and the user 
        input match,THEN the Interval resets the input field to an empty state, triggers a fadeOut 
        animation on the "lockscreen" div, and sends the user to the main page.
    */
    var lockscreenDisablerInterval = window.setInterval(function() {
        // Checks if the users password matches the one stored in localStorage
        if (localStorage.getItem("password") !== "" && document.getElementById("lockscreen_field").value == localStorage.getItem("password")) {
            document.querySelector("input").value = "";
            clearInterval(lockscreenDisablerInterval);
            clearInterval(textChangerInterval);
            $("#lockscreen").fadeOut(300);
            window.setTimeout(function () {
                window.location.href = "./system.html";
            }, 300);
        }
    }, 60);

    document.querySelector("a").addEventListener("click", function () {
        $("#lockscreen").fadeOut(500);
        window.setTimeout(function () {
            window.location.href = "./pwcpage.html"
        }, 500);
    });

});