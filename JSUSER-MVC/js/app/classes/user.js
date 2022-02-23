import * as Tools from '../../services/tools.js'        // importe les fonctions de tools.js en tant qu'objet avec ses méthodes associées qui sont lesdites fonctions

export class User {
    constructor(_fName, _email) {
        this.fName = _fName;
        this.email = Tools.fixEmail(_email);            // utilise la méthode fixEmail qui appartient à l'objet Tools et l'applique à l'email saisi par le client 
        this.id = parseInt(Math.random() * 9999);       // crée le id de façon aléatoire
    }
}