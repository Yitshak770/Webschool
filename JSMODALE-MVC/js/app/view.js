var main = document.querySelector("main");

function welcomeUser(x) {
    var h1 = document.createElement("h1");          // crée un élément H1
    h1.id = 'user' + x.id;                          // donne à ce H1 un id
    //h1.innerHTML = `Welcome, ${x.fName}`;           // inscrit ce H1 avec ce qu'il contient dans le HTML
    main.appendChild(h1);                           // positionne ce H1 comme enfant de la balise main
    return h1;                                      // retourne h1 vers le controller
};

function changeName(x) {                            // récupére comme argument user en provenance de controller.js
    main.innerHTML = "";                            // vide complètement tout le contenu de la balise main
    welcomeUser(x);                                 // exécute welcomeUser avec user en argument de façon à afficher le nouveau user.fName dans le H1
}



export {welcomeUser, changeName};                   // exporte les fonctions vers le controller