/*jslint browser*/
/*globals MathJax, MutationObserver*/

// MathJax config
MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS"],
    extensions: ["tex2jax.js", "MathEvents.js"],
    TeX: {
        extensions: ["noErrors.js", "noUndefined.js", "autoload-all.js"]
    },
    tex2jax: {
        inlineMath: [['$', '$'], ["\\(", "\\)"]],
        displayMath: [['$$', '$$'], ["\\[", "\\]"]],
        processEscapes: true
    },
    MathMenu: {
        showRenderer: false
    },
    menuSettings: {
        zoom: "Click"
    },
    messageStyle: "none",
    SVG: {
        blacker: 0,
        font: "Gyre-Pagella",
        linebreaks: {
            automatic: true,
            width: "container"
        },
        scale: 90
    },
    "HTML-CSS": {
        preferredFont: "Gyre-Pagella",
        scale: 95,
        linebreaks: {
            automatic: true,
            width: "container"
        }
    }
});

// Typeset the page
function typesetMaths(element) {
    'use strict';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
}

// Create an observer that will typeset MathJax
// when the text changes.
// To do: only typeset the maths that changes,
// not all the maths in the document.
var observer = new MutationObserver(function (mutations) {
    'use strict';
    mutations.forEach(function (mutation) {
        typesetMaths(document.body);
    });
});
// Listen for changes with the observer
var previewBody = document.querySelector('body');
observer.observe(previewBody, {
    childList: true
});
