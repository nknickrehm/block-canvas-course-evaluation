// ==UserScript==
// @name         Remove Course Evaluation Modal
// @namespace    https://knickrehm.dev/
// @version      1.0
// @description  Removes the annoying course banner
// @author       Nikolas Knickrehm
// @match        https://frankfurtschool.instructure.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @updateURL    https://github.com/nknickrehm/block-canvas-course-evaluation/raw/main/block-canvas-course-evaluation-modal.js
// @downloadURL    https://github.com/nknickrehm/block-canvas-course-evaluation/raw/main/block-canvas-course-evaluation-modal.js
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
