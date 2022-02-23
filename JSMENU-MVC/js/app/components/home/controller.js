import * as View from "./view.js";          // import de toutes les fonctions ou objets en prevenance de view.js en tant qu'objet View
import * as Model from "./model.js";        // import de toutes les fonctions ou objets en prevenance de model.js en tant qu'objet Model

function open() {
    View.open();                            // exécute la fonction open qui se trouve dans le view.js
}

export { open };                            // permet au controller.js du dosier app de lancer open()