/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const run = document.getElementById("run").addEventListener("click", () => {
        let mySelf = {lastName: "Dellaert", firstName: "Mick", age: 42, city: "Antwerp", country: "Belgium" };
        console.log(`Hi! My name is ${mySelf.firstName} ${mySelf.lastName}, I live in ${mySelf.city}, ${mySelf.country} and I am ${mySelf.age} years old. Nice to meet you.`)
    })
})();
