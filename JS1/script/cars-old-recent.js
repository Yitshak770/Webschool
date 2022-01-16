// "use strict";

    // document.querySelector("#main").classList.add("visible");
    // document.querySelector(".recherche").classList.add("visible");
    // document.querySelector(".reset").classList.add("visible");

    // CREATION DU HTML POUR LES VOITURES
    
    //ENLEVER LES ENREGISTREMENTS
    
var Cars = []
var mainDiv = document.getElementById("main");

function createHTMLCategories () {
    
    /******************************* création des catégories dans le HTML **********************************/
    const Categories = [
        "Electric" , "Luxury" , "Economy" , "Sport" , "Minivan" , "City-car" , "Subcompact" , "Sedan" , "Convertible" , "SUV"
    ];
    var catCont = document.getElementById("cat-cont");
    
    Categories.forEach(function(cat) {
        
        var div = document.createElement("div");
        div.className = "choice choice-search";                        
        catCont.appendChild(div);
        
        var check = document.createElement("input");
        check.className = "check-box";                  
        check.type = "checkbox";
        check.id = cat;
        check.name = cat;
        check.value = cat;
        div.appendChild(check);
        
        var label = document.createElement("label");
        // label.setAttribute("for", cat); 
        label.htmlFor = cat;                         
        label.innerHTML += cat;
        div.appendChild(label);
        
        check.addEventListener("change", searchCategory2);
    });
    
    /******************************* sélection des voitures selon les catégories - choix inclusif **********************************/
    
    function searchCategory1() {
        var allCars = document.querySelectorAll(".eachCar");
        allCars.forEach(function(x) {
            x.style.display = "none";
        });
        var inputs = catCont.querySelectorAll("input[type=checkbox]:checked");
        var checkedArr = [];
        inputs.forEach(function(x){
            checkedArr.push(x.value);
        });
        /* affiche toutes les voitures si rien n'est coché */
        if (checkedArr.length == 0) {
            allCars.forEach(function(x) {
                x.style.display = "block";
            })
        }
        /* affiche les voitures des catégories cochées*/
        checkedArr.forEach(function(nameOfChooseCat) {
            // récupérer toutes les div (cartes) avec la catégorie actuelle
            var catDivsAll = document.querySelectorAll(".cat-" + nameOfChooseCat);
            console.log(catDivsAll);
           // et les passer en display none
            catDivsAll.forEach(function(y) {
                y.style.display = "block";
            });
           // retourne dans la boucle avec la catégorie suivante
        });
        
    };

    /******************************* sélection des voitures selon les catégories - choix exclusif **********************************/
    
    function searchCategory2() {
        var allCars = document.querySelectorAll(".eachCar");
        allCars.forEach(function(x) {
            x.style.display = "none";
        });
        var inputs = catCont.querySelectorAll("input[type=checkbox]:checked");
        var checkedArr = [];
        inputs.forEach(function(x){
            checkedArr.push(x.value);
        });
        /* affiche toutes les voitures si rien n'est coché */
        if (checkedArr.length == 0) {
            allCars.forEach(function(x) {
                x.style.display = "block";
            })
        }
        
        for (let i = 0; i < allCars.length; i++) {          // fait passer toutes les voitures pour vérifier si elle contiennent la catégorie cochée
            var display = true;                             // par défaut on consière que ces catégories sont bien présentes dans cette fiche voiture (div)
            const car = allCars[i];
            var allCats = car.className;
            for (let j = 0; j < checkedArr.length; j++) {  // on va faire passer toutes les catégories cochées dans la boucle afin de vérifier si elle sont présente dans cette carte
                const cat = checkedArr[j];                  
                if (allCats.includes(cat) == false) {       // si une catégorie cochée n'est pas présente la boucle s'arrete (break)
                    display = false;
                    break;   
                }
            }
            if (display) {                                  // si toutes les catégories cochées sont présentes alors la carte s'affiche (display reste true)
                car.style.display ="block"
            }
        }
           // retourne dans la boucle (le 2ème for) avec la catégorie suivante
    };  // retourne dans la boucle (le premier for) avec la voiture suivante
        
    
}
createHTMLCategories ()   


    /*********************************** création des voitures dans le HTML *****************************************/
function createHTML() {
    Cars = [    {
        plate : "10",
        make : "Jaguar",
        model : "XJ50",
        category : ["Luxury", "Sedan"],
        price : "$80000",
        image : "xj50.jpg"
    },
    {
        plate : "11",
        make : "Ferrari",
        model : "F8",
        category : ["Sport", "Luxury"],
        price : "$150000",
        image : "ferrari.jpg"
    },
    {
        plate : "12",
        make : "Toyota",
        model : "Rav4",
        category : ["SUV"],
        price : "$40000",
        image : "rav4.jpg"
    },
    {
        plate : "13",
        make : "Tesla",
        model : "Model X",
        category : ["Electric", "Sport"],
        price : "$60000",
        image : "tesla.jpg"
    },
    {
        plate : "14",
        make : "Opel",
        model : "Corsa",
        category : ["Economy"],
        price : "$20000",
        image : "corsa.jpg"
    },
    {
        plate : "15",
        make : "Toyota",
        model : "Aygo",
        category : ["City-car", "Economy"],
        price : "$15000",
        image : "aygo.jpg"
    },
    {
        plate : "16",
        make : "Renault",
        model : "Clio",
        category : ["Subcompact"],
        price : "$18000",
        image : "clio.jpg"
    },
    {
        plate : "17",
        make : "BMW",
        model : "430i",
        category : ["Convertible", "Luxury"],
        price : "$130000",
        image : "430i.jpg"
    }]
    var toAppend = "";

    Cars.forEach(function (car) {
        toAppend += 
        `<div id = "car${car.plate}" class = "eachCar cat-${car.category.join(" cat-")}">
        <h3 class = "category" > ${car.category.join(", ")} </h3>
        <button class = "btn dlt btn-danger button" onclick = "deleteCar(this, '${car.plate}')"> X </button>
        <img class = "image" src="./assets/${car.image}">
        <p class = "make">${car.make}</p>
        <p class = "model" >${car.model}</p>
        <p class = "price">${car.price}</p>
        <p class = "plate">${car.plate}</p>
        </div>`;
    });
    mainDiv.innerHTML = toAppend;

}

createHTML ();

/******************************** Fin de la création du HTML **********************************/





/******************************** supprime des voitures en cliquant sur le x ************************************/

// en cliquant sur le bouton on envoie les 2 infos (le bouton et la plaque) à la fonction deleteCar.

function deleteCar(btn, pl) {                               // btn et pl sont les paramètres de la fonction qui reçoit en argument this et ${car.plate}
    btn.parentElement.remove();                             // efface la div sans retirer du array en utilisant btn
    for (let i = 0; i < Cars.length; i++) {                 // retire du array la voiture qui à été effacée en utilisant pl (la plaque)
        const car = Cars[i];                                  
        if (car.plate == pl) {
            Cars.splice (i , 1);
            break;
        } 
    }
}  

/******************************** supprime des voitures par son numéro de plaque ************************************/

function deleteCarBtn(plate) {
    plate = plate.replaceAll( "-", "" );
    var div = document.querySelector("#car" + plate);
    var btn = div.querySelector(".dlt");
    deleteCar(btn, plate);
};



/******************************* ajoute une nouvelle voiture en cliquant sur le bouton ***********************************/


function addNewCar(plate) {                                 //ajoute une voiture au array 
    plate = plate.replaceAll( "-", "" );
    var obj = new Car(plate, ["Sedan"], "Mercedes", "E350", "$54000", "e350.jpg")
    Cars.push(obj);
    createNewCarHTML(obj)
    console.log(Cars);
};

function createNewCarHTML(car) {                            //envoie ce nouvel élément du array vers le HTML
    var div = document.createElement("div");
    div.className = `eachCar cat-${car.category.join(" cat-")} newCar"`
    div.id = `car${car.plate}`;
    var restHTML = 
    `<h3 class = "category" > ${car.category.join(", ")} </h3>
    <button class = "btn dlt btn-danger button" onclick = "deleteCar(this, '${car.plate}')"> X </button>
    <img class = "image" src="./assets/${car.image}">
    <p class = "make">${car.make}</p>
    <p class = "model" >${car.model}</p>
    <p class = "price">${car.price}</p>
    <p class = "plate">${car.plate}</p>
    `; 
    div.innerHTML = restHTML;
    
    mainDiv.appendChild(div);
}

class Car {
    constructor(_plate, _category, _make, _model, _price, _image) {
        this.plate = _plate;
        this.category = _category;
        this.make = _make;
        this.model = _model;
        this.price = _price;
        this.image = _image;
    }
}


/******************************* ajoute une nouvelle voiture en remplissant le formulaire *********************************/

// let myForm = document.querySelector(".adding");
// myForm.addEventListener("submit", function addNewCar() {
//         let plate = document.querySelector(".Plate");
//         let make = document.querySelector("#select-make");
//         let model = document.querySelector(".Model");
//         let category = document.querySelector("#select-categ");
//         let price = document.querySelector(".Price");
//         var obj = {
//                 plate : plate.value,
//                 make : make.value,
//                 model : model.value,
//                 category : category.value,
//                 price : price.value,
//                 image : "xj50.jpg"
//             }
//             Cars.push(obj);
//             createNewCarHTML(obj);
        
//         });
        
        
/******************************* réinitialise la liste *********************************/

var catCont2 = document.getElementById("cat-cont");
console.log (catCont2); // correct
var inputs2 = catCont2.querySelectorAll("input[type=checkbox]:checked");
console.log(inputs2); // pas correct
var checkedArr2 = [];
inputs2.forEach(function(x){
    checkedArr2.push(x.value);
});
if (checkedArr2.length < 1){
document.querySelector("#myResetButton").addEventListener("click", createHTML);
};



        


 