/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        let numbers = document.getElementById("numbers").value;
        let array = numbers.split(", ");
        array.sort((a, b) => a - b);
        numbers = array.join(", ");
        console.log(numbers)

    });

})();
