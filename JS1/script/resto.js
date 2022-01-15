
// ------------ fonction statique --------------- //

function falafelFoodTruck() {
    let bread = "pita";
    let qtyBall = 5;
    let extras = ["hummus", "salad", "onions"];
    let extrasText = extras.join(", ");
    // extras.foreach(function createExtras(x) {        // équivalent au join()
    //     extrasText += `${x}, `;   
    // });
    return `falafel detail : ${bread}, ${qtyBall} balls, + ${extrasText}.`;
}
falafelFoodTruck();
// alert (falafelFoodTruck())


// ------------ fonction dynamique --------------- //

function falafelResto(bread, qtyBall, extras) {       // paramètres
    let extrasText = extras.join(", ");
    // extras.foreach(function createExtras(x) {
    //     extrasText += `${x}, `;   
    // });
    return `falafel detail : ${bread}, ${qtyBall} balls, + ${extrasText}.`;
}
// alert (falafelResto("pita", 5, ["humus", "salad"]))        // arguments


// -------------- début du programme --------------------//
let myForm = document.querySelector("#falafel");
let result = document.querySelector("#result");
let fieldValues =[];
let checkValues =[];
let message = "";
myForm.addEventListener("submit", function send() {

    let fields = document.querySelectorAll('input:not([type="checkbox"]):not([type="submit"]), select');
    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    
    fields.forEach(function (x) {
        fieldValues.push(x.value);
    });

    checkboxs.forEach(function (x) {
        if (x.checked) {
        checkValues.push(x.value);  
        };
    });
       
    let myExtras = checkValues.join(" + ");

    message = `Hello ${fieldValues[0]} here is your felafel : \n ${fieldValues[1]} with ${fieldValues[2]} balls + ${myExtras}`;
    console.log(message);
    console.log("tata");
    return message;
});

console.log(message);
console.log("toto");


// result.style.display = "block" ; 
// result.innerHTML = message;     



//**************** CODE VALIDE DECLARATIONS ******************//
// let mySubmit = document.querySelector("#submit-falafel");
// let nameN = document.querySelector(".name");
// let choosenBread = document.querySelector("#select-bread");
// let choosenBalls = document.querySelector("#select-balls");
// let choosenExtras = [];


//**************** CODE VALIDE 3 DEBUT ******************//
// mySubmit.addEventListener("click", send);
// function send() {  // cette fonction envoie les données du formulaire sur une popup alert
//     function searchExtras () {  // cette fonction récupère les valeurs des cases cochées et les met en tableau
//         let checkedExtras = document.querySelectorAll('input[type="checkbox"]')
//         checkedExtras.forEach(function (x) {
//             if(x.checked) {
//                 choosenExtras.push(x.value);
//             };
//         });           
//     }
//     searchExtras();
//     let myExtras = choosenExtras.join(" + ");
//     let message = `Hello ${nameN.value} here is your felafel : \n ${choosenBread.value} with ${choosenBalls.value} balls + ${myExtras}`;
//     alert(message);
// }          
//**************** CODE VALIDE 3 FIN ******************//
      


//**************** CODE VALIDE 1 DEBUT ******************//
// mySubmit.addEventListener("click", send);
// function send() {
//     let checkedExtras = document.querySelectorAll('input[type="checkbox"]:checked')
//     checkedExtras.forEach(function (x) {
//         choosenExtras.push(x.value);
//     })
//     let myExtras = choosenExtras.join(", ");
//     alert(`here is your felafel ${nameN.value} : ${choosenBread.value} with ${choosenBalls.value} balls + ${myExtras}`)  
// }
//**************** CODE VALIDE 1 FIN ******************//


//**************** CODE VALIDE 2 DEBUT ******************//
// mySubmit.addEventListener("click", send);
// function send() {
//     let checkedExtras = document.querySelectorAll('input[type="checkbox"]')
//     checkedExtras.forEach(function (x) {
//         if (x.checked) {
//         choosenExtras.push(x.value);}
//     })
//     let myExtras = choosenExtras.join(" + ");
//     alert(`here is your felafel ${nameN.value} : ${choosenBread.value} with ${choosenBalls.value} balls + ${myExtras}`)  
// }                    
//**************** CODE VALIDE 2 FIN ******************//                   