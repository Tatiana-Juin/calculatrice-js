// RECUPERE LES ELEMENTS DU DOM
let ecran = document.querySelector(".ecran");
//SELECTIONNE ELEMENT ET ON LE TRANSFORME EN TABLEAU 
let touches = [...document.querySelectorAll(".btn")];

// console.log(touches);

let precedent = 0; 
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

// POUR RECUPERE TOUTES LES KEY DE CHAQUE TOUCHE 
// let listKeyCodes = touches.map(touche=> touche.dataset.key);
// console.log(listKeyCodes);

// // function pour convertir le keycode
// document.addEventListener("keydown",(e)=>{
//     let valeur = e.keyCode.toString();
//     // console.log(valeur);
//     calculer(valeur)
    
// })

// //function quand on click sur une touche 
// document.addEventListener("click",(e)=>{
//     // console.log(e);
//     let valeur = e.target.dataset.key;
//     calculer(valeur)
//     // console.log(valeur);
// })

// //FONCTION POUR CALCULER
// function calculer(valeur){
//     if(listKeyCodes.includes(valeur)){
//     //    SWITCH POUR LE CALCULE 
//     }
    
//     // console.log(listKeyCodes.includes(valeur));
// }

