"use strict";
$(function () {
    let entries_section = document.getElementById("entries_section");

    $("#main_screen").fadeIn(1000);

    function mainScreen () {
        for (let i = 1; i < 3; i++) {
            fetch('cjq/entries/entry' + i + '.txt')
            .then(response => response.text())
            .then(data => {
                let newArticle = document.createElement("article");
                newArticle.innerHTML = data;
                entries_section.appendChild(newArticle);
            });
        }
    }

    mainScreen();
});