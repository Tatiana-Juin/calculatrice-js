// RECUPERE LES ELEMENTS DU DOM
let ecran = document.querySelector(".ecran");
//SELECTIONNE ELEMENT ET ON LE TRANSFORME EN TABLEAU GRACE AU SPRITE
let touches = [...document.querySelectorAll(".btn")];

// console.log(touches);
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

