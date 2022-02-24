function init (arr) {                                               // la fonction init va recevoir un argument en provenance de controller.js qui est le menu saisi dans model.ls
    var nav = document.createElement("nav");                        // création de la balise <nav>
    var ul = document.createElement("ul");                          // création de la balise <ul>
    arr.forEach((x) => {                                            // afin de créer les balises <li>, boucle dans tous les éléments du array arr qui entre en argument
        var li = document.createElement("li");                      // création de chaque balise <li>
        li.innerHTML = `<a href = "#${x.path}"> ${x.title} </a>`;   // création du HTML qui se trouve dans la balise <li> à savoir la balise <a>
        ul.appendChild(li);                                         // insertion des balises <li> dans le HTML dans la balise <ul>
    });
    nav.appendChild(ul);                                            // insertion de la balise <ul> dans le HTML dans la balise <nav>
    document.querySelector("header").appendChild(nav);              // insertion de la balise <nav> dans le HTML dans la balise <header>
};


export {init};                                                      // export de la fonction init