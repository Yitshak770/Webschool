//import sheet from "./style.css" assert { type: "css" };
import { SpecialInput } from "../reusable/input.js";                                                // importe le constructor du input à partir du fichier input.js


var main = document.querySelector("main");          

function open() {                                                                                   // définit la fonction open() 
    var css = { backgroundColor: "yellow" , fontWeight : "bold"};                                   // attribue un style au input à travers l'objet css qui sera rentré à la ligne suivante
    var input = new SpecialInput(css, "email", "Enter your email", "inputEmail1","", "", "");       // crée le input en HTML
    //document.adoptedStyleSheets = [sheet];
    main.innerHTML = `<h1>Welcome to Home component</h1>`;                                          // crée et écrit le H1 dans le HTML à l'intérieur de la balise <main>
    main.appendChild(input);                                                                        // inscrit le input à l'intérieur de la balise <main>
};

export { open };                                                                                    // exporte la fonction open()