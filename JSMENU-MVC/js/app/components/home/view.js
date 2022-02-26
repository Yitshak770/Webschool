import sheet from "./style.css" assert { type: "css" };                                         // importe la feuille de style spécifique à cette page
import { SpecialInput } from "../reusable/input.js";                                            // importe le constructor du input à partir du fichier input.js
import { SpecialH1 } from "../reusable/H1.js";                                                  // importe le constructor du H1 à partir du fichier H1.js


var main = document.querySelector("main");          


function open() {                                                                               // définit la fonction open() 
    document.adoptedStyleSheets = [sheet];                                                      // attribue la feuille de style spécifique de cette page
    main.innerHTML = "";                                                                        // Vide la page précédente pour ouvrir sur une page blanche
    var css1 = { backgroundColor: "#f1f1f1" , fontWeight : "bold"};                             // attribue un style au input à travers l'objet css qui sera rentré à la ligne suivante
    var input = new SpecialInput(css1, "email", "Enter your email", "inputEmail1","", "", "");  // crée le input en HTML d'après le constructor
    var css2 = { fontWeight : "bold"};                                                          // attribue un style au H1 à travers l'objet css qui sera rentré à la ligne suivante
    var H1 = new SpecialH1(css2, "my-id", "my-class", "Welcome to Home component");             // crée le H1 en HTML d'après le constructor
    main.appendChild(H1)                                                                        // incrit le H1 dans le HTML à l'intérieur de la balise <main>
    main.appendChild(input);                                                                    // inscrit le input à l'intérieur de la balise <main>
};

export { open };                                                                                // exporte la fonction open()