export class SpecialH1 extends HTMLHeadingElement {                         // crée ma classe de input (specialInput) avec un design spécifique pour tous les H1 du site 
    constructor(_css, _id, _class, _innerText) {                            // définit un constructeur avec les propriétés de l'input qui seront entrées en argument
      super();                                                              // crée tout ce qui se trouve dans le HTMLInputElement par défaut 
      this.innerText = _innerText;
      this.id = _id;
      this.class = _class;
      this.style.fontSize = "55px";                                         // attribue une taille de police par défaut au input
      this.style.padding = "10px";                                          // attribue un padding par défaut au input
      this.style.marginLeft = "30px";                                       // attribue un margin-left par défaut au input
      this.style.color = "#000";
      this.style.textAlign = "right";
      for (let key in _css) {                                               // _css étant une suite de propriétés à l'intérieur d'un objet, une boucle est effectuée
        this.style[key] = _css[key];                                        // qui décompose chaque propriété css en une ligne distincte avec le nom de la propriété css et sa valeur
      }
      
      this.addEventListener("mouseover", this.mOver);                       // met un écouteur d'évèvement 
      this.addEventListener("mouseout", this.mOut);                         // met un écouteur d'évèvement 
    }
  
    
  
    mOver() {
      this.style.color = "#f1f1f1";                                 // change le style lorsque la souris passe sur le input
    }

    mOut() {
      this.style.color = "#000";                              // change le style lorsque la souris quitte le input
    }
  
    
  }
  
  customElements.define("special-h1", SpecialH1, { extends: "h1" });    // déclaration de ma classe specialInput afin qu'elle puisse être utilisée en tant que input