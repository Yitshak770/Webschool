import * as Model from './model.js';                        // importe toutes les fonctions exportées de model.js qui deviennent des méthodes pour l'objet Model
import * as View from './view.js';                          // importe toutes les fonctions exportées de view.js qui deviennent des méthodes pour l'objet View

var user = null;                                            // déclare user

export function init() {
    user = Model.getUserInfo();                             // écrase user en lui donnant une nouvelle valeur : celle qui est retournée de la fonction getUserInfo dans model.js
    if (!user) {                                            // si user (tel qu'il est retourné depuis model.js) n'existe pas, 
        var fName = prompt("What is your name ?");          // un prompt lui demande son nom et l'attribue à la variable fName
        var email = prompt("What is your email ?");         // un prompt lui demande son email et l'attribue à la variable email
        user = Model.addUser(fName, email);                 // lance l'exécution de addUser dans model.js avec fName et email en arguments et en récupére les valeurs de 
    };                                                      //                                                           l'objet user qui est retournée par la fonction (dans model.js)
    var h1 = View.welcomeUser(user);                        // lance l'exécution de welcomeUser dans view.js avec user en argument et en récupére la valeur du h1 retounée par la fonction                
    h1.addEventListener("click", changeName)                // si on clique sur ce h1 on déclanche l'exécution de changeName qui va récupérer puis envoyer la valeur de fName dans model.js
};

function changeName() {
    user.fName = prompt("what is you new name ?")           // un prompt lui demande son nouveau nom et l'attribue à la propriété fName de l'objet user     
    Model.changeName(user.fName)                            // lance l'exécution de changeName dans model.js avec user.fName en argument afin de l'inscrire dans le localstorage
    View.changeName(user)                                   // lance l'exécution de changeName dans view.js avec user en argument afin d'afficher le nouveau nom dans le H1
}

