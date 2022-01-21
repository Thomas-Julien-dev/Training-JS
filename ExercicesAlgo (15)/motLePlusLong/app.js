function trouverLongueurMax(str){
    // On va devoir découper la str en arr
    let mots = str.split(' ');
    let longMax = 0; 

    for(let i = 0; i < mots.length; i++){
        if(mots[i].length > longMax){
            longMax = mots[i].length;
        }
    }
    return longMax;
}


console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));


// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)
