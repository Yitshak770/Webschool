// "use strict";

    // document.querySelector("#main").classList.add("visible");
    // document.querySelector(".recherche").classList.add("visible");
    // document.querySelector(".reset").classList.add("visible");

    // CREATION DU HTML POUR LES VOITURES
    
    //ENLEVER LES ENREGISTREMENTS
    
    
    
    /******************************* création des catégories dans le HTML **********************************/

var Cars = []
var mainDiv = document.getElementById("main");
var catCont = document.getElementById("cat-cont");
let contCheck = document.querySelector(".container-checkbox");

let Categories = [
    "Electric" , "Luxury" , "Economy" , "Sport" , "Minivan" , "City-car" , "Subcompact" , "Sedan" , "Convertible" , "SUV"
];

function createHTMLCategories (a,b,c) {
    c.forEach(function(cat) {
        
        var div = document.createElement("div");
        div.className = "choice";                        
        a.appendChild(div);
        
        var check = document.createElement("input");
        check.className = `check-box ${b}`;                  
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
        
        // check.addEventListener("change", searchCategory2);
    });
}
createHTMLCategories (catCont, "check-search", Categories);
createHTMLCategories (contCheck, "add-car", Categories);








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


/******************************* ajoute une catégorie *********************************/

let buttonAddCat = document.querySelector(".add-categ");
buttonAddCat.addEventListener("click", addCat);


function addCat() {
    
    let categoryNew =[];
    let newCat = prompt ("which category do you want to add ?").toLowerCase();
    newCat = newCat.slice(0,1).toUpperCase() + newCat.slice(1);  // ne fonctionne pas       
    categoryNew.push(newCat);
    Categories.push(newCat);  // uniquement pour mettre à jour le array des catégories
    
    createHTMLCategories (catCont, "check-search", categoryNew);
    createHTMLCategories (contCheck, "add-car", categoryNew);   
    initSearchCheckbox();
}

// Station Pickup
/******************************** tri sur les voitures début **********************************/

let checkedArr = [];
let allCars = document.querySelectorAll(".eachCar");

initSearchCheckbox();



// let choiceRadio = document.querySelector(".cat-radio")
let inclusiveSearchButton = document.getElementById("inclusive-search-button");
let exclusiveSearchButton = document.getElementById("exclusive-search-button");
inclusiveSearchButton.addEventListener("change", searchCategory );
exclusiveSearchButton.addEventListener("change", searchCategory );

function initSearchCheckbox() {
    let choiceSearch = document.querySelectorAll(".check-search");  // ne fonctionne pas sur les nouvelles catégories
    choiceSearch.forEach(function(x){
        x.addEventListener("change", searchCategory);            
    });
    
}
function searchCategory() { 
    /*efface toutes les voitures*/
    allCars.forEach(function(x) {
        x.style.display = "none";
    });
    /*récupère toutes les cases cochées*/
    checkedArr = [];
    var inputs = catCont.querySelectorAll("input[type=checkbox]:checked");
    inputs.forEach(function(x){
        checkedArr.push(x.value);
    });
    /* affiche toutes les voitures si rien n'est coché */
    if (checkedArr.length == 0) {
        allCars.forEach(function(x) {
            x.style.display = "block";
        })
    }
    if (exclusiveSearchButton.checked){ 
            searchCategory2();
        } else {
            searchCategory1();       
        };   
    
} 

/******************************* sélection des voitures selon les catégories - choix exclusif **********************************/

function searchCategory2() {
        
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


/******************************* sélection des voitures selon les catégories - choix inclusif **********************************/

function searchCategory1() {
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

/******************************** tri sur les voitures fin **********************************/    
    
    
    
    
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


/******************************* ajoute une nouvelle voiture en remplissant le formulaire début ***********************************/

let myForm = document.querySelector("#submit-adding-car");

myForm.addEventListener("click",addNewCar);

function addNewCar() {                                 //ajoute une voiture au array 
    let plate = document.querySelector(".Plate");
    let make = document.querySelector("#select-make");
    let model = document.querySelector(".Model");
    let price = document.querySelector(".Price");
    let errorMessage = document.querySelector(".error");
    
    /***********************  récupère le tableau des catégories et affiche les 2 premières *************************************/   
    
    let contCheck = document.querySelector (".container-checkbox");
    let boxes = contCheck.querySelectorAll("input[type=checkbox]:checked");
    let myCategory = [];
    console.log(myCategory)
    boxes.forEach(function(x){
        myCategory.push(x.value);
    });
    if (myCategory.length > 2) {
        myCategory = myCategory.slice( 0 , 2 );
        errorMessage.innerHTML = "Only 2 categories can be choosen";
    };
    /*********  vérifie que le numéro de plaque n'est pas déjà pris et si c'est le cas bloque le programme et affiche un message d'erreur  **********/
    let Plate = plate.value;
    if (Plate === "") {
        errorMessage.innerHTML = "Plate number can't be empty";
        
    }    else {
        Plate = Plate.replaceAll( "-", "" );  //supprime les acrractères problématiques   
            let allPlatesArr = [];                              
            let allplates = document.querySelectorAll(".plate");
            allplates.forEach(function(x) {
                allPlatesArr.push(x.textContent);
            });
        if (allPlatesArr.includes(Plate)) {
            errorMessage.innerHTML = "Your have a wrong plate number";
        }
        else {    
            errorMessage.innerHTML = "";
            var obj = new Car(Plate, myCategory, make.value, model.value, price.value, "e350.jpg")   
            }
        
        Cars.push(obj);
        createNewCarHTML(obj)

    }
    
};

function createNewCarHTML(car) {                            //envoie ce nouvel élément du array vers le HTML
    var div = document.createElement("div");
    div.className = `eachCar cat-${car.category.join(" cat-")} newCar"`
    div.id = `car${car.plate}`;
    mainDiv.appendChild(div);
    
    var H3 = document.createElement("H3");
    H3.className = "category";
    H3.innerHTML += `${car.category.join(", ")}`;
    div.appendChild(H3);

    var button = document.createElement("button");
    button.className = "btn dlt btn-danger button";
    button.setAttribute("onclick", `deleteCar(this, '${car.plate}')`);
    button.innerHTML += "X";
    div.appendChild(button);

    var image = document.createElement ("img");
    image.className = "image";
    image.src = `./assets/${car.image}`;
    div.appendChild(image);

    var p1 = document.createElement("p");
    p1.className = "make";
    p1.innerHTML += `${car.make}`;
    div.appendChild(p1);

    var p2 = document.createElement("p");
    p2.className = "model";
    p2.innerHTML += `${car.model}`;
    div.appendChild(p2);

    var p3 = document.createElement("p");
    p3.className = "price";
    p3.innerHTML += `${car.price}`;
    div.appendChild(p3);

    var p4 = document.createElement("p");
    p4.className = "plate";
    p4.innerHTML += `${car.plate}`;
    div.appendChild(p4);
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


/******************************* ajoute une nouvelle voiture en remplissant le formulaire fin *********************************/

     
/******************************* réinitialise la liste *********************************/

document.querySelector("#myResetButton").addEventListener("click", resetHTML);

function resetHTML() {
    // let catCont = document.getElementById("cat-cont");
    let checkedBoxes = catCont.querySelectorAll("input[type=checkbox]:checked");
    createHTML();
    if (checkedBoxes.length > 0){   
    searchCategory() 
    };
}







        


 