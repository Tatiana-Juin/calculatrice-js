// RECUPERE LES ELEMENTS DU DOM
let ecran = document.querySelector(".ecran");
//SELECTIONNE ELEMENT ET ON LE TRANSFORME EN TABLEAU 
let touches = [...document.querySelectorAll(".btn")];

//precedent => recupére le resultat du calcule 
let precedent = 0; 
// affichage => pour faire le calcule 
let affichage='';
// pour les opération 
let operation = null;

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
    // console.log(touche);
    // Pour affichager plusieurs chiffre ou nb a virgule 
    if(parseFloat(touche) >=0 || touche==="."){
        affichage = (affichage==="") ? touche.toString() : affichage + touche.toString();
        ecran.innerText = affichage;
    }else{ // operateur et C

        switch (touche) {
            case 'C':
                affichage = "";
                precedent = 0; 
                operation =null;
                ecran.innerText=affichage;
                break;
        
            case '/':
                
            case '*': 
               
            case '-':
            case '+':
               
                // pour récuperer valeur précédente
                precedent = (precedent ===0 ) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage),operation)
                // pour afficher le nb 
                ecran.innerText = precedent;
                //pour récupérer l'operation
                operation = touche;
                // initialise affichage a vide
                affichage="";
                
                break;
            
            case "=":
                
        }

    }
    
}

/**
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operateur 
 * @returns number
 */
function calculer(nb1,nb2,operation){
    if(operation ==="/") return nb1 / nb2;
    if(operation === "*" ) return nb1 * nb2;
    if(operation ==="-" ) return nb1 - nb2;
    if(operation ==="+") return nb1 + nb2;
}



