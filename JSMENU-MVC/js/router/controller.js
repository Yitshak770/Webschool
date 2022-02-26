import * as View from "./view.js";                          // import de toutes les fonctions ou objets en prevenance de view.js en tant qu'objet View
import * as Model from "./model.js";                        // import de toutes les fonctions ou objets en prevenance de model.js en tant qu'objet Model

import * as Home from "../app/components/home/controller.js";               // import de toutes les fonctions ou objets en prevenance de controller.js dans home en tant qu'objet Home
import * as Dashboard from "../app/components/dashboard/controller.js";     // import de toutes les fonctions ou objets en prevenance de controller.js dans dashboard en tant qu'objet Dashboard
import * as Contact from "../app/components/contact/controller.js";         // import de toutes les fonctions ou objets en prevenance de controller.js dans contact en tant qu'objet Contact
import * as Logout from "../app/components/logout/controller.js";           // import de toutes les fonctions ou objets en prevenance de controller.js dans logout en tant qu'objet Logout



export function init() {                                    // export de la fonction init qui va lancer l'exécution de init dans view.js avec les données récupérées dans model.js
    var path = window.location.hash;                                        // déclare une variable qui prends tout ce qui est après le hachtag
    if( path !== undefined && path !== null && path !== "" ) {              // si cette variable n'est pas vide, 
        history.pushState("", document.title, window.location.pathname);    // il vide l'historique de tout ce qui se trouve après le hachtag et lui met à la place l'URL appelée
    };
    View.init(Model.Menu);                                  // exécution dans view.js de la fonction init avec en argument l'objet Model et son objet Menu

    window.addEventListener("hashchange", () => {          // écouteur d'évènements qui va gérer des actions en fonction du changement du hashtag de l'url
        //var path = e.newURL.split("#")[1];                // récupère ce qui se trouve après le dièse dans l'url (dans case il faut enlever le #)
        var path = window.location.hash;                    // récupère ce qui se trouve après le dièse dans l'url (dans case il faut mettre le #)
        switch (path) {                                     // switch entre les pages (sans changer de page)
            case "#home":                                  
                Home.open();                                // lance la méthode open() de l'objet Home dans controller.js du dossier home
                break;                                      // si home est sélectionné sort du if
            case "#dashboard":
                Dashboard.open();
                break;
            case "#contact":
                Contact.open();
                break;
            case "#logout":
                Logout.open();
                break;
        
            default:
                break;
        }
    })
}