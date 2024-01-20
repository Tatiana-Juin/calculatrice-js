// RECUPERE LES ELEMENTS DU DOM
let ecran = document.querySelector(".ecran");
//SELECTIONNE ELEMENT ET ON LE TRANSFORME EN TABLEAU 
let touches = [...document.querySelectorAll(".btn")];

//precedent => recupére le resultat du calcule 
let precedent = 0; 
// actuel => pour faire le calcule 
let actuel=0;

// Pour récupérer toutes les touches
for(let touche of touches){
    // console.log(touche);
    touche.addEventListener("click",gererTouche)
    // touche.addEventListener("keydown",gererTouche)
}


// GERER LES TOUCHES
function gererTouche(){
    // récupérer la valeur des touches 
    let touche = this.innerText;
    console.log(touche);

    ecran.innerText=touche

    
}

/**
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operateur 
 * @returns number
 */
function calculer(nb1,nb2,operateur){
    if(operateur ==="/") return nb1 / nb2;
    if(operateur === "*" ) return nb1 * nb2;
    if(operateur ==="-" ) return nb1 - nb2;
    if(operateur ==="+") return nb1 + nb2;
}



