/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const btnRun = document.getElementById("run");
    const template = document.getElementById("tpl-hero");
    const targetList = document.getElementById("target");

    async function getHeroSpecs () {
        let heroId = document.getElementById("hero-id").value;
        let data = await fetch(`http://localhost:3000/heroes?id=${heroId}`);
        let jsonData = await data.json();
        return jsonData;
    }

    btnRun.addEventListener("click", function () {

        let heroes = getHeroSpecs();

        heroes.then(function (result) {
            console.log(heroes);
            console.log(result);

            let node = template.content.cloneNode(true);
            node.querySelector(".name").innerHTML = result[0].name;
            node.querySelector(".alter-ego").innerHTML = result[0].alterEgo;
            node.querySelector(".powers").innerHTML = result[0].abilities;
            targetList.appendChild(node);
        });
    })
})
();
