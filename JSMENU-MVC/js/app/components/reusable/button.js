export class SpecialButton extends HTMLButtonElement {                        // crée ma classe de input (specialInput) avec un design spécifique pour tous les input du site 
    constructor(_css, _class, _id, _innerText) {    // définit un constructeur avec les propriétés de l'input qui seront entrées en argument
      super();                                                              // crée tout ce qui se trouve dans le HTMLInputElement par défaut 
      this.id = _id;
      this.class = _class;
      this.innerText = _innerText;
      this.style.fontSize = "20px";                                         // attribue une taille de police par défaut au input
      this.style.padding = "10px";                                          // attribue un padding par défaut au input
      this.style.marginLeft = "30px";                                       // attribue un margin-left par défaut au input
      for (let key in _css) {                                               // _css étant une suite de propriétés à l'intérieur d'un objet, une boucle est effectuée
        this.style[key] = _css[key];                                        // qui décompose chaque propriété css en une ligne distincte avec le nom de la propriété css et sa valeur
      }
      this.addEventListener("change", this.change);                         // met un écouteur d'évèvement 
      this.addEventListener("click", this.click);                           // met un écouteur d'évèvement 
      this.addEventListener("mouseover", this.mOver);                       // met un écouteur d'évèvement 
      this.addEventListener("mouseout", this.mOut);                         // met un écouteur d'évèvement 
    }
  
    change() {                                    
      console.log(this.value);                                              // récupère la saisie champs si celle-ci a changé
    }
  
    mOver() {
      this.style.border = "1px gray solid";                                 // change le style lorsque la souris passe sur le input
    }

    mOut() {
      this.style.border = "2px #767676 solid";                              // change le style lorsque la souris quitte le input
    }
  
    click() {
      alert("I clicked");                                                   // effectue une action au premier click dans le input
    }
  }
  
  customElements.define("special-button", SpecialButton, { extends: "button" });    // déclaration de ma classe specialInput afin qu'elle puisse être utilisée en tant que input