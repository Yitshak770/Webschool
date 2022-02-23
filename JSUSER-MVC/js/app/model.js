import {User} from "./classes/user.js";

var user = {};

// function addUser(x) {                                       // récupére comme argument user.fName en provenance de controller.js
//     user.fName = x;                                         // crée le prénom en fonction de la valeur entrée en argument
//     user.id = parseInt(Math.random() * 9999);               // crée le id de façon aléatoire
//     localStorage.userInfo = JSON.stringify(user);           // convertit user en JSON et l'envoie vers le localstorage
//     return user;                                            // renvoie user vers controller.js
// }

function addUser(x, y) {                                    // récupére comme argument fName et email en provenance de controller.js  
    user = new User(x, y);                                  // crée le user d'après le constructor déclaré dans user.js - le prénom et le email de User sont les valeurs entrées en argument 
    localStorage.userInfo = JSON.stringify(user);           // convertit user en JSON et l'envoie vers le localstorage
    return user;                                            // renvoie user vers controller.js
}


function getUserInfo() {
    var userJSON = localStorage.getUserInfo;                // récupère le fichier JSON stocké dans le localstorage        
    if(userJSON) user = JSON.parse (userJSON);              // si ce fichier existe, il le transforme en objet (user)
    return user.id ? user : null;                           // si le id de cet objet existe il le retourne vers controller.js sinon il retourne null
}

function changeName(x) {                                    // récupére comme argument user.fName en provenance de controller.js
    user.fName = x;                                         // attribue une nouvelle valeur à fName en fonction de la valeur entrée en argument
    localStorage.userInfo = JSON.stringify(user);           // convertit user en JSON et l'envoie vers le localstorage
}

export {getUserInfo, changeName, addUser};                  // exporte les fonctions vers controller.js