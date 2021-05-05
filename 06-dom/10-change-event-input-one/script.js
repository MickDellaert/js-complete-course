/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let input = document.getElementById("pass-one");
    let counter = document.getElementById("counter");
    input.maxLength = "10";

    input.addEventListener("input", () => {

           const inputLength = input.value;
           counter.innerHTML = `${inputLength.length}/${10}`;
    })

})();
