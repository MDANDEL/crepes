let farine = 63;
let oeuf = 1;
let lait = 0.2;
let sucre = 0.5;
let beurre = 13;

let button = document.getElementById("generate");

button.addEventListener("click", function (e) {
    let nbInvites = document.getElementById("number-guest").value;
    if (nbInvites <= 0) {
        alert("Merci de renseigner un bon nombre d'invités")
    } else {
        let newValue = parseInt(nbInvites.value);
        nbInvites.value = newValue;
        farine = farine * nbInvites;
        oeuf = oeuf * nbInvites;
        lait = lait * nbInvites;
        sucre = sucre * nbInvites;
        beurre = beurre * nbInvites;

        console.log(
            "Vous avez choisi de faire des crepes pour " + nbInvites + " personnes"
        );
        console.log("Il vous faudra " + farine + " g de farine");
        console.log("Il vous faudra " + oeuf + " oeufs");
        console.log("Il vous faudra " + lait + " L de lait ");
        console.log("Il vous faudra " + sucre + " c.a.s de sucre");
        console.log("Il vous faudra " + beurre + " g de beurre");
    }

});
console.log(button, nbInvites.value);


let lotOeuf = 12;
let achatOeuf = Math.ceil(oeuf / lotOeuf);
console.log("Il faut acheter " + achatOeuf + " pack de " + lotOeuf + " oeufs");
