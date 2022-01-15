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
        label.setAttribute("for", cat);                          
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
        /* fait passer toutes les voitures pour vérifier si elle contiennent la catégorie cochée*/
        for (let i = 0; i < allCars.length; i++) {
            var display = true;
            const car = allCars[i];
            var allCats = car.className;
            for (let j = 0; j < checkedArr.length; j++) {
                const cat = checkedArr[j];
                if (allCats.includes(cat) == false) {
                    display = false;
                    break;   
                }
            }
            if (display) {
                car.style.display ="block"
            }
        }
           // retourne dans la boucle avec la catégorie suivante
    };
        
    
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
}



function createNewCarHTML(car) {
    var toAppend = 
    `<div id = "car${car.plate}" class = "eachCar">
    <h3 class = "category" > ${car.category} </h3>
    <button class = "btn dlt btn-danger button" onclick = "deleteCar(this, '${car.plate}')"> X </button>
    <img class = "image" src="./assets/${car.image}">
    <p class = "make">${car.make}</p>
    <p class = "model" >${car.model}</p>
    <p class = "price">${car.price}</p>
    <p class = "plate">${car.plate}</p>
    </div>`;
    mainDiv.innerHTML += toAppend;
}


/******************************* ajoute une nouvelle voiture *********************************/

let myForm = document.querySelector(".adding");
myForm.addEventListener("submit", function addNewCar() {
        let plate = document.querySelector(".Plate");
        let make = document.querySelector("#select-make");
        let model = document.querySelector(".Model");
        let category = document.querySelector("#select-categ");
        let price = document.querySelector(".Price");
        var obj = {
                plate : plate.value,
                make : make.value,
                model : model.value,
                category : category.value,
                price : price.value,
                image : "xj50.jpg"
            }
            Cars.push(obj);
            createNewCarHTML(obj);
        
        });
        
        
/******************************* réinitialise la liste *********************************/

document.querySelector("#myResetButton").addEventListener("click", createHTML);



        //let nameN = document.querySelector(".name");
        // let choosenBread = document.querySelector("#select-bread");
        
        
        // METHODE 3
        
        // var Cars = []
        // var mainDiv = document.getElementById("main");
        
        // function createHTML () {
            //     Cars = [    {
                //         plate : "10",
                //         make : "Jaguar",
                //         model : "XJ50",
                //         category : "Luxury",
//         price : "$80000",
//         image : "xj50.jpg"
//     },
//     {
//         plate : "11",
//         make : "Ferrari",
//         model : "F8",
//         category : "Sport",
//         price : "$150000",
//         image : "ferrari.jpg"
//     },
//     {
//         plate : "12",
//         make : "Toyota",
//         model : "Rav4",
//         category : "SUV",
//         price : "$40000",
//         image : "rav4.jpg"
//     },
//     {
//         plate : "13",
//         make : "Tesla",
//         model : "Model X",
//         category : "Electric",
//         price : "$60000",
//         image : "tesla.jpg"
//     },
//     {
//         plate : "14",
//         make : "Opel",
//         model : "Corsa",
//         category : "Economy",
//         price : "$20000",
//         image : "corsa.jpg"
//     },
//     {
//         plate : "15",
//         make : "Toyota",
//         model : "Aygo",
//         category : "City car",
//         price : "$15000",
//         image : "aygo.jpg"
//     },
//     {
//         plate : "16",
//         make : "Renault",
//         model : "Clio",
//         category : "Subcompact",
//         price : "$18000",
//         image : "clio.jpg"
//     },
//     {
//         plate : "17",
//         make : "BMW",
//         model : "430i",
//         category : "Convertible",
//         price : "$130000",
//         image : "430i.jpg"
//     },
//     {
//         plate : "18",
//         make : "Mercedes",
//         model : "Vision",
//         category : "Minivan",
//         price : "$52000",
//         image : "vision.jpg"
//     },
//     {
//         plate : "19",
//         make : "Mercedes",
//         model : "E350",
//         category : "Sedan",
//         price : "$54000",
//         image : "e350.jpg"
//     },
//     {
//         plate : "20",
//         make : "Roll-Royce",
//         model : "Ghost",
//         category : "Luxury",
//         price : "$180000",
//         image : "ghost.jpg"
//     },
//     {
//         plate : "21",
//         make : "Ford",
//         model : "Mustang",
//         category : "Sport",
//         price : "$45000",
//         image : "mustang.jpg"
//     },
//     {
//         plate : "22",
//         make : "Chevrolet",
//         model : "Corvette",
//         category : "Sport",
//         price : "$48000",
//         image : "corvette.jpg"
//     },
//     {
//         plate : "23",
//         make : "Mercedes",
//         model : "S600",
//         category : "Luxury",
//         price : "$160000",
//         image : "S600.jpg"
//     },
//     {
//         plate : "24",
//         make : "Toyota",
//         model : "Supra",
//         category : "Sport",
//         price : "$75000",
//         image : "supra.jpg"
//     },
//     {
//         plate : "25",
//         make : "Renault",
//         model : "Talisman",
//         category : "Sedan",
//         price : "$60000",
//         image : "talisman.jpg"
//     },
//     {
//         plate : "26",
//         make : "Audi",
//         model : "A5",
//         category : "Convertible",
//         price : "$49000",
//         image : "a5.jpg"
//     },
//     {
//         plate : "27",
//         make : "BMW",
//         model : "X3",
//         category : "SUV",
//         price : "$38000",
//         image : "x3.jpg"
//     },
//     {
//         plate : "28",
//         make : "BMW",
//         model : "IX",
//         category : "Electric",
//         price : "$68000",
//         image : "ix.jpg"
//     },
//     {
//         plate : "29",
//         make : "Audi",
//         model : "Q3",
//         category : "SUV",
//         price : "$48000",
//         image : "q3.jpg"
//     },
//     {
//         plate : "30",
//         make : "Renault",
//         model : "Kadjar",
//         category : "SUV",
//         price : "$24000",
//         image : "kadjar.jpg"
//     },
//     {
//         plate : "31",
//         make : "Lamborghini",
//         model : "Aventador",
//         category : "Sport",
//         price : "$165000",
//         image : "aventador.jpg"
//     },
//     {
//         plate : "32",
//         make : "Peugeot",
//         model : "3008",
//         category : "SUV",
//         price : "$23000",
//         image : "3008.jpg"
//     },
//     {
//         plate : "33",
//         make : "Fiat",
//         model : "500",
//         category : "City car",
//         price : "$15000",
//         image : "500.jpg"
//     }]
// var toAppend = "";
    
//     Cars.forEach(function (car) {
//             toAppend += 
//             `<div id = "car${car.plate}" class = "eachCar">
//                 <h3 class = "category" > ${car.category} </h3>
//                 <button class = "btn dlt btn-danger button" onclick = "deleteCar(this, '${car.plate}')"> X </button>
//                 <img class = "image" src="./assets/${car.image}">
//                 <p class = "make">${car.make}</p>
//                 <p class = "model" >${car.model}</p>
//                 <p class = "price">${car.price}</p>
//                 <p class = "plate">${car.plate}</p>
//             </div>`;
//         });
//         mainDiv.innerHTML = toAppend;
        
// }

// createHTML ();

// function deleteCar(btn, pl) {
//     btn.parentElement.remove();
//     for (let i = 0; i < Cars.length; i++) {
//         const car = Cars[i];
//         if (car.plate == pl) {
//         Cars.splice (i , 1);
//         break;
//         } 
//     }
// }  

// function deleteCarBtn(plate) {
//     plate = plate.replaceAll( "-", "" );
//     var div = document.querySelector("#car" + plate);
//     var btn = div.querySelector(".dlt");
//     deleteCar(btn, plate);
// }

// document.querySelector("#myResetButton").addEventListener("click", createHTML);




// METHODE 1

// var toAppend = "";
// Cars.forEach(addCars);
// mainDiv.innerHTML = toAppend;
// function addCars(car, i) {
// toAppend += 
// `<div id = "car${i}" class = "eachCar">
// <h3 class = "category" > ${car.category} </h3>
// <button class = "btn btn-danger button" onclick = "deleteCar(this)"> X </button>
// <img class = "image" src="./assets/${car.image}">
// <p class = "make">${car.make}</p>
// <p class = "model" >${car.model}</p>
// <p class = "price">${car.price}</p>
// </div>`;
// }
// function deleteCar(btn) {
//     btn.parentElement.remove();
// }


// METHODE 2

// var toAppend = "";
// Cars.forEach(addCars);
// mainDiv.innerHTML = toAppend;
// function addCars(car, i) {
//     toAppend += 
//     `<div id = "car${i}" class = "eachCar">
//     <h3 class = "category" > ${car.category} </h3>
//     <button class = "btn btn-danger button" onclick = "deleteCar(${i})"> X </button>
//     <img class = "image" src="./assets/${car.image}">
//     <p class = "make">${car.make}</p>
//     <p class = "model" >${car.model}</p>
//     <p class = "price">${car.price}</p>
//     </div>`;
//     }
// function deleteCar(car) {
//     document.getElementById("car" + car).remove();
//     }
            
    