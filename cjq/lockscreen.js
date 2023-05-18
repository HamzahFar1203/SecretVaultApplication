"use strict";
$(function () {
    let lock_screen = document.getElementById("lockscreen");

    let welcomeText = ["HELLO", "HOW ARE YOU DOING?", "ARE YOU HAVING A GOOD DAY?", "I HOPE YOU ARE!", "HOW IS THE WEATHER?", 
                    "PERHAPS IT'S SUNNY OUTSIDE..", "I SUPPOSE I'LL NEVER KNOW..", "SINCE I'M AN APP AND ALL.", "IT'S QUITE A DIFFICULT JOB",
                    "YOU BARELY GET TO SEE THE WORLD", "I MEAN, I COULD START CREEPING THROUGH THE WEB", "BUT THERE ARE SOME WEIRD THINGS ON THERE",
                    "I'D RATHER NOT.", "THIS LITTLE SYSTEM HAS BEEN MY SAFE HAVEN", "I LIKE IT HERE.", "IT'S QUIET", "AND PEACEFUL.",
                    "ANYWAY, I'LL LEAVE YOU ALONE FOR A SECOND", "BYE."];

    function lockScreen () {
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

        var lockscreenDisablerInterval = window.setInterval(function() {
            if (document.getElementById("lockscreen_field").value == "xmplpsswd") {
                $("#lockscreen").hide(300);
                // lock_screen.style.display = "none";
                window.location.href = "./system.html";
                // $("#main_screen").fadeIn(2000);
                // mainScreen();
                // main_screen.style.display = "block";
                clearInterval(lockscreenDisablerInterval);
                clearInterval(textChangerInterval);
            }
        }, 60);
    }

    lockScreen();
});