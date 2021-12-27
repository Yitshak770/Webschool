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