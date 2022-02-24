import * as Model from './model.js';                        // importe toutes les fonctions exportées de model.js qui deviennent des méthodes pour l'objet Model
import * as View from './view.js';                          // importe toutes les fonctions exportées de view.js qui deviennent des méthodes pour l'objet View





function init () {
    View.createModaleHTML("Mon Titre", "Une grande ligne de sous titre ou d'explication qui peut mêmme aller jusqu'à deux lignes", "Label du champ 1", "Label du champ 2", "Cancel", "Send", "2");
    View.createModaleButton("ouvrir la modale");
    document.querySelector("#btn-decl").addEventListener("click", function () {
         Model.myModale();
     });
    document.querySelector("#modale-close").addEventListener("click", function () {
        Model.closeModale()
    });
    document.querySelector("#modale-cancel").addEventListener("click", function () {
        Model.closeModale()
    });
    document.querySelector("#modale-send").addEventListener("click", function () {
        Model.getInputs()
    });
    
}

export { init };