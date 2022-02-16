let myDisplay = document.querySelector(".box p");
let myImage = document.querySelector(".box img");
let myButtonCreate = document.querySelector(".b1");
let myButtonRestart = document.querySelector(".b2");
let myDelayDisplayed = document.querySelector("H6");
let myDelay = 0;
console.log (myDelay);
let img1 = "assets/etape1.jpg";
myImage.src = img1;
let img2 = "assets/etape2.jpg";
let img3 = "assets/etape3.jpg";
let img4 = "assets/etape4.jpg";
let img5 = "assets/etape5.jpg";

myButtonCreate.addEventListener("click", createCar);

function init() {
    myDelay = Math.floor(Math.random() * 10+1)*1000;
    myDelayDisplayed.innerHTML = `Delay : ${myDelay}`;
    console.log (myDelay);
    setTimeout(myDelay);
    myDisplay.innerHTML = "";
}


function createCar() {
    init();
    const P1 = new Promise ((resolve, reject) => {
        if (myDelay < 5000) {
            resolve(img2);
        } else {
            reject(img1);
        };       
    });
    
    P1.then((success) => {
        myImage.src = success;
        clearTimeout(myDelay);
        myButtonRestart.removeEventListener("click", restartStep);
        myButtonRestart.classList.add("nohover");
        myButtonCreate.addEventListener("click", createCar1);
        myButtonCreate.classList.remove("nohover");
    }).catch((e) => {
        myImage.src = e;
        myDisplay.innerHTML = "Alert : the step was unsuccessful, restart the step";
        clearTimeout(myDelay);
        myButtonRestart.addEventListener("click", restartStep);
        myButtonRestart.classList.remove("nohover");
        myButtonCreate.removeEventListener("click", createCar);
        myButtonCreate.classList.add("nohover");
    });
    
    
};



function createCar1() {
    init();
    const P2 = new Promise ((resolve, reject) => {
        if (myDelay < 5000) {
            resolve(img3);
        } else {
            reject(img2);
        };       
    });

    P2.then((success) => {
        myImage.src = success;
        clearTimeout(myDelay);
        myButtonRestart.removeEventListener("click", restartStep1);
        myButtonRestart.classList.add("nohover");
        myButtonCreate.addEventListener("click", createCar2);
        myButtonCreate.classList.remove("nohover");
    }).catch((e) => {
        myImage.src = e;
        myDisplay.innerHTML = "Alert : the step was unsuccessful, restart the step";
        clearTimeout(myDelay);
        myButtonRestart.addEventListener("click", restartStep1);
        myButtonRestart.classList.remove("nohover");
        myButtonCreate.removeEventListener("click", createCar1);
        myButtonCreate.classList.add("nohover");
    });
    
    
}

function createCar2() {
    init();
    const P3 = new Promise ((resolve, reject) => {
        if (myDelay < 5000) {
            resolve(img4);
        } else {
            reject(img3);
        };       
    });

    P3.then((success) => {
        myImage.src = success;
        clearTimeout(myDelay);
        myButtonRestart.removeEventListener("click", restartStep2);
        myButtonRestart.classList.add("nohover");
        myButtonCreate.addEventListener("click", createCar3);
        myButtonCreate.classList.remove("nohover");
    }).catch((e) => {
        myImage.src = e;
        myDisplay.innerHTML = "Alert : the step was unsuccessful, restart the step";
        clearTimeout(myDelay);
        myButtonRestart.addEventListener("click", restartStep2);
        myButtonRestart.classList.remove("nohover");
        myButtonCreate.removeEventListener("click", createCar2);
        myButtonCreate.classList.add("nohover");
    });
}

function createCar3() {
    init();
    const P4 = new Promise ((resolve, reject) => {
        if (myDelay < 5000) {
            resolve(img5);
        } else {
            reject(img4);
        };       
    });

    P4.then((success) => {
        myImage.src = success;
        clearTimeout(myDelay);
        myButtonRestart.classList.add("nohover");
        myButtonRestart.disabled = true;
        myButtonCreate.addEventListener("click", carFinished);
        myButtonCreate.classList.remove("nohover");
    }).catch((e) => {
        myImage.src = e;
        myDisplay.innerHTML = "Alert : the step was unsuccessful, restart the step";
        clearTimeout(myDelay);
        myButtonRestart.addEventListener("click", restartStep3);
        myButtonRestart.classList.remove("nohover");
        myButtonCreate.removeEventListener("click", createCar3);
        myButtonCreate.classList.add("nohover");
    });
}


function restartStep() {
    createCar()
};

function restartStep1() {
    createCar1()
};

function restartStep2() {
    createCar2()
};

function restartStep3() {
    createCar3()
};

function carFinished() {
    alert ("you can drive your car");
    myImage.src = img5;
    myDisplay.innerHTML = "YOUR CAR IS READY";
    myButtonRestart.classList.add("nohover");
    myButtonRestart.disabled = true;
}


















// pour accéder à son compte client il faut 
// 1 - entrer son email et son mot de passe
// 2 - valider le email reçu
// 3 - valider le capcha
// 4 - choisir son action


// let myForm = document.querySelector("form");
// myForm.addEventListener("submit", login);
// function login(e) {
//     e.preventDefault();
//     if (document.querySelector(".text1").value === "abcd" && document.querySelector(".text2").value === "1234") {
//         alert("login ok");
//     }
// }



// function myLogin() {
//     return new Promise((resolve, reject)=>{
        

//     })


// }