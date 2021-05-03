/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let newImage = document.getElementById("source").getAttribute("data-image");
    let newTag = document.createElement("img");

    newTag.setAttribute("src", newImage);
    newTag.setAttribute("alt", "kittens! <3")

    document.getElementById("target").appendChild(newTag);

    let removeElem = document.getElementById("source");
    removeElem.remove()


})();
