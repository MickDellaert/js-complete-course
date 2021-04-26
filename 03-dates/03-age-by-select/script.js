/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", () => {

        const birthDay = document.getElementById("dob-day").value;
        const birthMonth = document.getElementById("dob-month").value;
        const birthYear = document.getElementById("dob-year").value;

        let dob = new Date(birthYear, birthMonth -1, birthDay);
        let monthDiff = Date.now() - dob.getTime();
        let ageDateFormat = new Date(monthDiff);
        let year = ageDateFormat.getUTCFullYear();
        let age = Math.abs(year - 1970);

        alert(age);

    });

})();
