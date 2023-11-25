// ==UserScript==
// @name         Remove Course Evaluation Modal
// @namespace    https://knickrehm.dev
// @version      0.9
// @description  Remove the annoying modal in Canvas blocking you from accessing other sections of the website
// @author       Nikolas Knickrehm
// @include      /.*frankfurtschool\.instructure\.com.*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function () {
        var overlay = document.getElementById("ek-overlay")
        var modal = document.getElementById("ek-modal")
        console.log(overlay)
        overlay.parentNode.removeChild(overlay)
        modal.parentNode.removeChild(modal)
    }, 2000)
})();