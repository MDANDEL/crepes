let button = document.getElementById("generate");
let nbInvites = document.getElementById("number-guest");

button.addEventListener("click", function () {
    let newValue = parseInt(nbInvites.value);
    nbInvites.value = newValue;
});
console.log(button, nbInvites.value);


// Model
let farine = 63;
let oeuf = 1;
let lait = 0.2;
let sucre = 0.5;
let beurre = 13;


// Controller
farine = farine * nbInvites;
oeuf = oeuf * nbInvites;
lait = lait * nbInvites;
sucre = sucre * nbInvites;
beurre = beurre * nbInvites;

// Vue
console.log(
    "Vous avez choisi de faire des crepes pour " + nbInvites + " personnes"
);
console.log("Il vous faudra " + farine + " g de farine");
console.log("Il vous faudra " + oeuf + " oeufs");
console.log("Il vous faudra " + lait + " L de lait ");
console.log("Il vous faudra " + sucre + " c.a.s de sucre");
console.log("Il vous faudra " + beurre + " g de beurre");

let lotOeuf = 12;
let achatOeuf = Math.ceil(oeuf / lotOeuf);
console.log("Il faut acheter " + achatOeuf + " pack de " + lotOeuf + " oeufs");
