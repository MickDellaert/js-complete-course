/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById("target");
    let table = document.createElement('table');

    for (let i = 1; i < 11; i++) {
        let row = table.insertRow();
            for (let j = 1; j < 11; j++) {
            let cell = row.insertCell();
                cell.innerText = i*j;
        }
    }

    target.appendChild(table);
    table.setAttribute("border", "1");

})();
