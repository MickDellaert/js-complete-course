/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function personalInfo() {

    const ageQuestion = prompt("What is your age?");
    const genderQuestion = prompt("What is your gender");
    const townQuestion = prompt("What town do you live in?");

    const answers = confirm(`your info:
    Age: ${ageQuestion}
    Gender: ${genderQuestion}
    Town: ${townQuestion}
    Is this information correct? Please click OK`);

    if (answers !== true) {
        personalInfo();
    }



})();
