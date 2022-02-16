let myDisplay = document.querySelector(".box p");
let myImage = document.querySelector(".box img");
let myButtonCreate = document.querySelector(".b1");
//let myButtonRestart = document.querySelector(".b2");
let myDelayDisplayed = document.querySelector("H6");
let myDelay = 0;
let img1 = "assets/etape1.jpg";
myImage.src = img1;
let img2 = "assets/etape2.jpg";
let img3 = "assets/etape3.jpg";
let img4 = "assets/etape4.jpg";
let img5 = "assets/etape5.jpg";

myButtonCreate.addEventListener("click", createCar);

function display() {
    myDelay = Math.floor(Math.random() * 10+1)*1000
    myDelayDisplayed.innerHTML = `Delay : ${myDelay}`;
    console.log (myDelay);
    myDisplay.innerHTML = "";
}


function createCar() {
    // Première promesse
    function P1() {
      return new Promise((resolve, reject) => {
          display()
          setTimeout(function() {
            resolve(img2);
          }, myDelay);
      })
    }
    // Deuxième promesse
    function P2(res) {
        return new Promise((resolve, reject) => {
            myImage.src = res;
          display()
          setTimeout(function() {
            resolve(img3);
          }, myDelay);
      })
    }
    // Troisième promesse
    function P3(res){
      return new Promise((resolve, reject) => {
        myImage.src = res;
          display()
          setTimeout(function() {
            resolve(img4);
          }, myDelay);
      })
    }
    // Quatrième promesse
    function P4(res) {
      return new Promise((resolve, reject) => {
        myImage.src = res;
          display()
          setTimeout(function() {
            resolve(img5);
          }, myDelay);
      })
    }
    
    P1()
      .then(P2)
      .then(P3)
      .then(P4)
      .then(function(res) {
        myImage.src = res;
      })
      .catch(function(rej) {
    
       
      });
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