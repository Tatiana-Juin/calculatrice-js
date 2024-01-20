# Reflexion pour la calculatrice 
## etape 
1- On boucle sur les touches et on gère un evement au click qui appelle la fonction gererTouche()

## fonction gererTouche 
- Récupere la **valeur** du bouton

## fonction calculer(nb1, nb2,operation)
Cette fonction permet de faire les **calcules** que se soit l'addition, la soustraction , la multiplication, la division.    
Grace a **4 condition if** on peut différencier les calcules et les faire . Chaque **if** possède un **return différent** avec le calcule

## idée

Il faut **concatener l'affichage** des chiffres et du . pour des chiffres supérieur a 9 mais pour l'instant ce n'est pas possible .   
   
Il faut créer une condition qui dit : 


Si (parseFloat(touche ) est superieur ou égale a 0 OU touche est egale a ".") ALORS    
    // SI l'affichage est egale a vide alors touche est convertir en chaine sinon affichage + touche en string    
    le code est :  

    affichage = (affichage ==="") ? touche.toString() : affichage + touche.toString()
    ecran.innerText = affichage ;    
    
SINON
   
switch (touche) ALORS
    case 'C' : 
    affichage ="";
    operation= null;
    ecran.innerText = affichage;