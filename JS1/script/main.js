"use strict";

// CONCATENATION
function essai1() {
let name = prompt ("saisissez votre prénom");
let age = prompt ("saisissez votre age");
let message = "Your name is " + name + " and you are " + age + " years old.";
alert (message);
}

// DETERMINER SI UN PROMPT EST ENTIER OU DECIMAL
function essai2() {
let a = prompt ("saisissez un nombre entier ou décimal svp"); //2
a = parseFloat (a);
a1 = parseInt (a);
if (a == a1) {
    alert ("le nombre saisi est un nombre entier");
} else {
    alert ("le nombre saisi est un nombre décimal")
}
}

//SEPARER L'ENTIER DU DECIMAL D'UN NOMBRE ALEATOIRE ENTRE 0 ET 300 
function essai3() {
let a = (Math.random() * 300);
a1 = parseInt (a);
b = a -a1 ;
alert ("The random number is " + a + "\n The whole number is : " + a1 + " \n the decimal is " + b);
}

// DETERMINER SI UN PROMPT EST POSITIF OU NEGATIF
function essai4() {
let c = prompt ("saisissez un nombre positif ou négatif"); 
if ( c > 0 ) {
    str = "ton numéro est positif";
} else {
    str = "ton numéro est négatif";
}
alert ("Tu as choisi " + c + " , " + str + " et ton programme est terminé")
}

// EXERCICE CALCUL DE L'IMPOT
function essai5() {
const S = prompt ("saisissez votre salaire en shekels"); 
let i = 0;
if ( S < 25000 ) {
    i = S / 10;    
} else if ( S < 50000 ){
    i = S/10 + (S-25000)/5;
} else if ( S < 100000 ){
    i = S/10 + (S-25000)/5 + (S-50000)*3/10;
} else if ( S < 150000 ){
    i = S/10 + (S-25000)/5 + (S-50000)*3/10 + (S-100000)*2/5;
} else {
    i = S/10 + (S-25000)/5 + (S-50000)*3/10 + (S-100000)*2/5 + (S-150000)/2;
} 
alert ("Voici le montant de l'impot à payer : " + i + " shekels")
}

// RECUPERER UN PROMPT DANS UN ARRAY ET ADDITIONNER LES ELEMENTS D'UN TABLEAU
function essai6() {
let num = prompt ("saisissez une suite de nombres séparés par des virgules svp").split(",");
num = num.map(Number);
let x = num.length;
let sum = 0;
for(let i = 0; i < x; i++) {
          sum += num[i];
     }
alert ("la somme des nombres entrés est " + sum);
}

// EXERCICE MOYENNE DE LA MOYENNE PRECEDENTE
function essai7() {
let num = prompt ("saisissez une suite de nombres séparés par des virgules svp").split(",");
num = num.map(Number);
let avg = num[0];
let x = num.length;
let sum = 0;
for(let i = 1; i < x; i++) {
    if (num[i] !=0) {
        avg = (num[i] + avg)/2;
    } else {
        break
    }
     }
alert ("la moyenne cumulée est " + avg);
}

//EXERCICE 1 NOMBRES DIVISIBLES
function essai8() {
let num = prompt ("saisissez un nombre svp");
num = parseInt(num);
let d = [5,8];
let a =[];
let r = 0;
let x = 0;
let q = 0;
let sum = 0;
for (let j = 0; j < 2; j++) {
    r = num % d[j];
    x = num - r;
    q = x / d[j];
    for(let i = 0; i < q; i++) {
              a.push(x-(d[j]*i));
         }
}
for (let k = 0; k < a.length; k++) {
    sum += a[k];  
}
alert ("la somme des nombres divisibles par 5 et 8 est "+ sum);
}

//PALINDROMES
function essai9() {
    let num = prompt ("saisissez un nombre entier :");
    let rev ="";
    let signe = "";
    if (num < 0) {
        signe = "-";
        num = -num;
    } else if (num == 0) {
        rev = 0;
    }
    while (num > 0) {
        temp = num % 10;
        num = (num-temp)/10;
        rev += temp;
    }
    rev = rev + signe;
    alert (`voici votre nombre à l'envers : ${rev}`);
}

// PAIRS IMPAIRS
function essai10() {
    let N1 = prompt ('please enter a number');
let N = parseInt (N1);
let R = (N % 2);
let P = [];
let I = [];
let S = "";
let RP = 0;
if (R == 0)  {
    S = "pair";
    RP = RP - 1;
}
else {
    S = "impair";
    I.push (R);
    N = N-2;
};
for ( let i=0 ; i < N/2 ; i++ ) {
    R = R + 2;
    I.push (R);
    RP = RP + 2;
    P.push (RP);
}
alert ('le nombre saisi est un nombre ' + S + ' et les tous les pairs sont '+ P + ' et les tous les impairs sont ' + I); 
}

// OPEN - CLOSE
let fenetre = "";
function essai11 () {
    fenetre = window.open("https://demo770.com", "name", "width=400,height=200");
}
function essai12 () {
    fenetre.close();
}

// CONFIRM - TOLOWERCASE
function essai13 () {
    let texte = prompt ('veuillez entrer un mot en majuscule ou minuscule').toLowerCase();
    confirm ("Converti en minuscules, vous avez entré \n" + texte + "\n exact ?");
    alert ("merci");
}

// CONVERTIT TABLEAU EN LISTE (FOR)
function essai14 () {
    let cars = ["mazda", "ford", "bmw"];
    let qte = cars.length;
    let text = "";
    for (let i = 0; i < qte; i++) {
        text += "car " + ( i + 1 ) + ": " + cars[i] + "\n";        
    }
    alert (text);
}

// MAGIC NUMBER 26
function essai15 () {
    let f = false;
    let num = 0;
    let arr = [];
    for (let i = 0; i < 5; i++) {
        num = parseInt(prompt ('please enter a number'));    
        if (num < 1) {
            continue;
        } else {
            let sum = 0;
            while (num > 0) {
                sum += num % 10;
                num = Math.trunc(num / 10);
            }
            arr.push(sum);
            if(sum === 26) {
                f = true;
                break;
            }
        }
    }
    if(f) {
        alert ("magic number found");
    }
    alert("Your numbers are " + arr.join(" & "));
}

// METHODES DANS ARRAYS
function essai16 () {
    let cars = ["Mazda", "Ford", "BMW", "Fiat", "Honda"];
    alert (cars.join(", ") + " - Join transforme un array en string"); //transforme un array en string sans modifier le array
    alert (cars.slice( 1 , 4 ) + " - Slice prends une portion du array"); // prends une portion du 1 au 3
    if (cars.includes("Ford")) {
        alert ("This car position is : " + cars.indexOf("Ford") + " - Obtenu en utilisant includes et indexOf");  // si un élément n'existe pas il retourne -1
    } else {
        alert("This car doesn't exist");
    }
    alert (cars.shift() + " - Shift supprime le premier élément du array \n et il reste donc " + cars);
    alert (cars.pop() + " - Pop supprime le dernier élément du array \n et il reste donc " + cars);
    alert (cars.sort() + " - Sort trie par ordre alphabetique");
    alert (cars.reverse() + " - Reverse trie par ordre alphabetique inversé");
    cars.push("Honda"); alert ( "Push ajoute un élément (Honda) en fin de array - et voici donc le résultat " + cars);
    cars.splice(1 , 0 , "Tesla", "Toyota")          //  le premier numéro indique où commence le changement
                                                    //  le deuxième indique le nombre d'éléments à supprimer
                                                    //  les éléments suivants sont ajoutés à l'endroit indiqué à la première position
    alert ( "Splice ajoute et retire des éléments où on le souhaite - et voici donc le résultat " + cars);
}

// ENLEVER UN ELEMENT D'UN ARRAY DONT ON NE CONNAIT PAS LA POSITION
function essai17 () {
    let cars = ["Mazda", "Ford", "BMW", "Fiat", "Honda", "Ferrari", "Toyota", "Tesla"];
    let voiture = prompt ("quelle voiture voulez-vous retirer de la liste ci-dessous ? \n" + cars.join(" ,"));
    let N = cars.indexOf(voiture);
    let deleted = "";
    if (N >= 0) {
        deleted = cars.splice( N , 1);  // effectue l'opération et donne les éléments deleted
        alert ("Opération réussie "+ deleted +" a bien été retiré et voici la nouvelle liste \n" + cars.join(" ,"));
    } else { 
        alert("This car doesn't exist");
    }
}

// METHODES DANS DES STRING
function essai18() {
    let str = "a a z e r t y u i o p"
    if (str.includes("t")) {
        alert ("il y a bien un t et sa position est : " + str.indexOf("t") + " - Obtenu en utilisant includes et indexOf");  // si un élément n'existe pas il retourne -1
    } else {
        alert("cette lettre n'est pas présente");
    }
    str.split(" "); // transforme un string en array - chaque espace génère un nouvel élément
    alert (str + " est devenu un array grace à split");
    let str2 = str.replace("a", "q");
    alert (str2);
    let str3 = str.replaceAll("a", "q");
    alert (str3);
}

// EXERCICE 7 - 5 ETUDIANTS
function essai19() {
    let arr = [ ];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt ("enter a student :"));
    }
    alert ("the students are " + arr.sort().join(", "));
}

// EXERCICE 8 - EMAIL
function essai20() {

    let myEmail = prompt ('veuillez entrer votre adresse email').toLowerCase();
    let E = 0;  // première position après le @
    let G = ""; // les 9 caractères ce qui se trouvent après le @
    let F = ""; // tout ce qui se trouve après le @
    let H = ""; // tout ce qui se trouve jusqu'au @ (@ inclus)
        
    E = myEmail.indexOf("@")+1;
    G = (myEmail.slice( E , E+9 ));
    F = (myEmail.slice( E ));  // tout ce qui se trouve après le E
    H = (myEmail.slice( 0 , E ));

    if (E > 0 && F.includes(".")) {

        if (G === "gmail.com") {
            myEmail = (H.replaceAll(".", ""))+"gmail.com";
        } 
        alert ("Votre adresse " + myEmail + " a bien été enregistrée");

    } else {
        alert("veuillez entrer une adresse email valide");
    }

}

// EXERCICE 1 - VOYELLES ET CONSONNES
function essai21() {

    let nom = "";
    let V = [];  // liste des voyelles
    let C = [];  // liste des consonnes
    
    nom = prompt ('veuillez entrer vos nom et prénom').toLowerCase();
       
    for (let i = 0 ; i < nom.length ;  i++) {
        if (("aeiouy").includes(nom[i])){
            V.push(nom[i]);
        } else if (("bcdfghjklmnpqrstvwxz").includes(nom[i])) {  // élimine les carractères qui ne sont ni des voyelles ni des consonnes
            C.push(nom[i]);
        } 
    }

    V = V.sort().join(", ");
    C = C.sort().join(", ");
    
    alert("Votre chaîne contient les voyelles suivantes : " + V + "\n Et les consonnes suivantes : " + C);
   
}

// TABLEAU DES LETTRES D'UN STRING
function essai22() {

    let texte = "";
    let res = [];
    let lig = {
        letter: "",
        amount: ""
    };
        
    texte = prompt ('veuillez entrer un ou plusieurs mots').toUpperCase();
    let N = texte.length;
    
    for (let i = 0 ; i < N ;  i++) {
        alert (texte.split(texte[i]).length-1);
        res.push(lig["letter"] = texte[i],
                lig["amount"] = texte.split(texte[i]).length-1)
    }
    alert(res);
    console.log(res);


}
// NOMBRE DE VOYELLES ET CONSONNES
function essai23() {

let temp=prompt("veuillez saisir votre nom").toLowerCase();
let voyelle="aeiouy";
let consonne="zrtpqsdfghjklmwxcvbn";
let nbrVoyelle=0;
let nbrConsonne=0;

for(var i=0;i<consonne.length;i++){
    
    if (temp.includes(consonne[i])){
        nbrConsonne++;
    }
    if (temp.includes(voyelle[i])){
        nbrVoyelle++;
    }
    
}
alert("il y a dans votre nom "+nbrVoyelle+" voyelles \n et "+nbrConsonne+" consonnes")
}

// SWITCH CALCUL DE L'IMPOT
function essai24() {

    let salary = parseInt(prompt("Enter a salary :"));
    let taxes = 0;

    switch (true) {
        case salary > 25000:
            
            break;
    
        default:
            break;
    }
    const S = prompt ("saisissez votre salaire en shekels"); 
let i = 0;
if ( S < 25000 ) {
    i = S / 10;    
} else if ( S < 50000 ){
    i = S/10 + (S-25000)/5;
} else if ( S < 100000 ){
    i = S/10 + (S-25000)/5 + (S-50000)*3/10;
} else if ( S < 150000 ){
    i = S/10 + (S-25000)/5 + (S-50000)*3/10 + (S-100000)*2/5;
} else {
    i = S/10 + (S-25000)/5 + (S-50000)*3/10 + (S-100000)*2/5 + (S-150000)/2;
} 
alert ("Voici le montant de l'impot à payer : " + i + " shekels")


};

// ESSAIS
function essai25() {};
//essais de fonctions

// CHANGER LA COULEUR EN BLEU
function essai26() {
    document.querySelector(".bleu").style.color = "blue";
    
};

// TOOLS
function essai27() {
    const TOOLS = {
        fixEmail: function (email) {                        // fixemail --> clé  function --> valeur
            let arr = email.toLowerCase().split("@");
            if (arr[1] === "gmail.com") {
                arr[0] = arr[0].replaceAll("." , "");
            }
            return arr[0] + "@" + arr[1];
        },
        fixNan: function (num) {
            let dec = parseFloat(num);
            if (isNaN(dec)) {
                return 0;
            }
            let int = parseInt (num);
            if ( int < dec ) { 
                return dec;
            }
            return int;

        }
    }
    let myEmail = TOOLS.fixEmail(prompt("enter your email please"));
    alert(myEmail);
    let age = TOOLS.fixNan(prompt("How old are you ?"));
};

// FOREACH
function essai28() {
    document.querySelector("#main").classList.add("visible");
    document.querySelector(".recherche").classList.add("visible");
    document.querySelector(".reset").classList.add("visible");

    // CREATION DU HTML POUR LES VOITURES
    
    const Cars = [
        {
            make : "Jaguar",
            model : "XJ50",
            category : "Luxury",
            price : "$80000",
            image : "xj50.jpg"
        },
        {
            make : "Ferrari",
            model : "F8",
            category : "Sport",
            price : "$150000",
            image : "ferrari.jpg"
        }
    ]

    
    var mainDiv = document.getElementById("main");
    var toAppend = "";

    Cars.forEach(addCars);
    mainDiv.innerHTML = toAppend;

    // function addCars(car, i) {
    //     toAppend += 
    //     `<div id = "car${i}" class = "eachCar">
    //     <h3 class = "category" > ${car.category} </h3>
    //     <button class = "btn btn-danger button" onclick = "deleteCar(this)"> X </button>
    //     <img class = "image" src="./assets/${car.image}">
    //     <p class = "make">${car.make}</p>
    //     <p class = "model" >${car.model}</p>
    //     <p class = "price">${car.price}</p>
    //     </div>`;
    // }

    // function deleteCar(btn) {
    //     btn.parentElement.remove();
    // }

    // NOUVEL ESSAI DEBUT

    function addCars(car, i) {
            toAppend += 
            `<div id = "car${i}" class = "eachCar">
            <h3 class = "category" > ${car.category} </h3>
            <button class = "btn btn-danger button" onclick = "deleteCar(this)"> X </button>
            <img class = "image" src="./assets/${car.image}">
            <p class = "make">${car.make}</p>
            <p class = "model" >${car.model}</p>
            <p class = "price">${car.price}</p>
            </div>`;
        }
    
        function deleteCar(btn) {
            // document.getElementById("car" + car).remove();
            btn.parentElement.remove();
        }

    // NOUVEL ESSAI FIN


    // let listeCars = document.querySelector(".liste");
    
    // cars.forEach(createHTML);
    
    // function createHTML(car,i) {
        
    //     listeCars.innerHTML += 
    //     `<div class = "voitures" id = "car${i}" >
    //     <div class = "marque">${car.make}</div>
    //     <div class = "modele">${car.model}</div> 
    //     <div class = "categ">${car.category}</div>  
    //     <div class = "price">${car.price}</div>
    //     <img class = "photo" src="./assets/${car.image}" alt=""> 
    //     <div onclick="close(this)" class="fermeture btn">X</div>  
    //     </div>`;
        
    //     // EFFACER LES CARTES EN CLIQUANT SUR LE X
        
    // }
    // function close(btn) {
    // btn.parentElement.style.display = "none" ; 
    // }
};   
    
    
    
    // let resId = "";
    // let btn = document.querySelectorAll(".fermeture");
    // btn.forEach(button);
    //     function button(btn,i) {
    //     btn.addEventListener("click", detect);
    //     btn.addEventListener("click", close);
    //     function detect(e) {      
    //             resId = parseInt(`${e.target.id}`.slice(1));
    //         }
    //     function close() {
    //             document.querySelector("#v"+resId).style.display = "none" ; 
    //         }
    // };   



    // CREATION DU HTML POUR LES CATEGORIES
    
    const CATEG = [
        {
            nameC : "sport",
            texteC: "Sport"
        },
        {
            nameC : "luxury",
            texteC: "Luxury"
        },
        {
            nameC : "suv",
            texteC: "SUV"
        },
        {
            nameC : "electric",
            texteC: "Electric"
        },
        {
            nameC : "economy",
            texteC: "Economy"
        },
        {
            nameC : "city-car",
            texteC: "City car"
        },
        {
            nameC : "subcompact",
            texteC: "Subcompact"
        },
        {
            nameC : "convertible",
            texteC: "Convertible"
        },
        {
            nameC : "minivan",
            texteC: "Minivan"
        },
        {
            nameC : "sedan",
            texteC: "Sedan"
        }
    ]

    let listeCateg = document.querySelector(".categories");
    
    CATEG.forEach(CreateHTML);
    
    function CreateHTML(categ,i) {
        
        listeCateg.innerHTML += 
        `<div class="choix">
            <input type="checkbox" name="${categ.nameC}" id="${categ.nameC}" class= "check-box">
            <label for="${categ.nameC}">${categ.texteC}</label>
        </div>`
    }




    // RESET

    let resetButton = document.querySelector(".reset button");
    resetButton.addEventListener("click", reset);
    let cartes = document.querySelectorAll(".voitures");
    function reset() {
        for (let i = 0; i < cartes.length; i++) {
            cartes[i].style.display = "block" ;    
        };
    }
     
    // TRI EN COCHANT LES CHECKBOX



    let checkSport = document.querySelector("#sport");
    
    checkSport.addEventListener("click", afficheSport);
    
    function afficheSport() {
        if (checkSport.checked == true) {
            for (let i = 0; i < cartes.length; i++) {
                cartes[i].style.display = "none" ; 

                
                let carSport = document.querySelector("#categ");
                console.log(carSport);
                // cartes[i].style.display = "block!important";



            };
            
                
                
                
            
            
        }
        
    }

  

    
    
    
    
    

// FORM
function essai29() {
    // document.querySelector(".container").className =  "container visible";
    document.querySelector(".container").classList.add("visible");
}
function check() {
    let reg = [
        {firstName : "Bob", userName : "BB", passWord : "123"},
        {firstName : "Yehouda", userName : "YY", passWord : "12"},
        {firstName : "Nissan", userName : "NN", passWord : "1234"}
    ];
    let username = document.querySelector("input[type=text]");
    let pass = document.querySelector("input[type=password]");

    if (username.value == "" || pass.value == "" ) {
        document.querySelector("H1").style.color = "red" ;
        document.querySelector("H1").innerHTML = "Please fill Username and Password" ; 
    } else { 
        for (let i = 0; i < reg.length; i++) {
            
            if (username.value === reg[i].userName && pass.value === reg[i].passWord) { 
                document.querySelector("H1").style.color = "black" ;  
                document.querySelector("H1").innerHTML = "Welcome " + reg[i].firstName
                username.value = "";
                pass.value = "";
                break;
            } else { 
                document.querySelector("H1").style.color = "red" ;
                document.querySelector("H1").innerHTML = "Username or Password invalid" ;
            } 
            
        }
    }

    }

    // ESSAIS
function essai30() {
    document.querySelector(".voitures").style.display = "none" ;
}

