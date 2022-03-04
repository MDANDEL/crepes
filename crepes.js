let button = document.getElementById("generate");

button.addEventListener("click", function (e) {
    let nbInvites = document.getElementById("number-guest").value;
    if (nbInvites <= 0) {
        alert("Merci de renseigner un bon nombre d'invités")
    } else {
        let farine = 63;
        let oeuf = 1;
        let lait = 0.2;
        let sucre = 0.5;
        let beurre = 13;
        let quantityflour = document.getElementById("qtyflour");
        let quantityeggs = document.getElementById("qtyeggs");
        let quantitymilk = document.getElementById("qtymilk");
        let quantitysugar = document.getElementById("qtysugar");
        let quantitybutter = document.getElementById("qtybutter");

        let newValue = parseInt(nbInvites.value);
        nbInvites.value = newValue;
        farine = farine * nbInvites;
        oeuf = oeuf * nbInvites;
        lait = lait * nbInvites;
        sucre = sucre * nbInvites;
        beurre = beurre * nbInvites;

        quantityflour.innerText = farine;
        quantityeggs.innerText = oeuf;
        quantitymilk.innerText = lait.toFixed(2);
        quantitysugar.innerText = sucre;
        quantitybutter.innerText = beurre;

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
