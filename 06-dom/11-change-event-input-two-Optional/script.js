/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let input = document.getElementById("pass-one");
    let indicator = document.querySelector("#validity");
    input.maxLength = "10";

    let regex=("(?=(.*?\\d){2})[a-zA-Z0-9]{8,}");

    input.addEventListener("input", (e) => {

            if (input.value.match(regex))
            indicator.innerHTML = `Ok`;
            else {
                indicator.innerHTML =`Not ok`
            }
    })

})();
