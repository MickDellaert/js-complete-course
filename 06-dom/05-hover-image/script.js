/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let emoImg = document.getElementsByTagName("img")[0];
    let imgHover = emoImg.getAttribute("data-hover");
    let imgHoverBack = emoImg.getAttribute("src");

    emoImg.addEventListener("mouseover", function(){
        emoImg.setAttribute("src", imgHover)
    })
    emoImg.addEventListener("mouseout", function (){
        emoImg.setAttribute("src", imgHoverBack)
    })

})();
