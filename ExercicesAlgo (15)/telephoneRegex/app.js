function telephoneCheck(str){
    // ^0 pour notifier qu'on recherche au début de la chaîne de caractère un 0
    // Ensuite on veut un chiffre entre 1 et 9
    // Ensuite on accepte tout ce qui est - . ou espace.
    // ? : on accepte ce qui se situe à sa droite comme à sa gauche



    let regex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

    return regex.test(str);
}

console.log(telephoneCheck("06 44 64 90 21"));


// ----------------- ÉNONCÉ -----------------

// Vous devez vous assurer que vos utilisateurs rentrent bien un numéro Français.
// Ce numéro doit : 
// Démarrer par un 0 et être suivi d'un chiffre entre 1-9.
// Il faut qu'il y est 4 duos de chiffre de 1 à 9 après les deux premiers.
// Nous accepterons des espaces( ), tirets(-) et points(.) entre les duos de
// chiffres.
// Retournez true si la chaine en parametre passe le test(si c'est un numéro valable)
// et false en cas contraire.


// ----------------- CONSEILS -----------------

// Regex time!
// Google est votre ami.
// "Regex tool online" aussi.
// La document MDN et autre.

// Bon courage.