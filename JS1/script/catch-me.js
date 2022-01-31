

/**************************** cliquage sur le titre DEBUT *********************************************/
let myH1 = document.querySelector("#titre h1");
myH1.addEventListener("mouseenter", myHover);
function myHover() {
    myH1.innerHTML = " Do you want to start ?";
};

document.querySelector("#titre h1").addEventListener("mouseleave", function() {
    this.innerHTML = " CATCH ME IF YOU CAN";
});
/**************************** cliquage sur le titre FIN *********************************************/

/**************************** ouverture de l'alerte et départ du jeu DEBUT *********************************************/
myH1.addEventListener("click", startGame);
///////////////////////////////FONCTION DEPART DU JEU DEBUT
function startGame() {    
    alert("Are you ready ?");
    myH1.removeEventListener("mouseenter", myHover);
    myH1.removeEventListener("click", startGame);
    document.querySelector("#ecran H3").style.display = "none";
    let myDisplays = document.querySelectorAll(".datas");
    myDisplays.forEach (function(x) {
        x.style.display="block";
    }); 
    document.querySelector(".catchme").classList.add("rotating");
    myTimer();
      
};
///////////////////////////////FONCTION DEPART DU JEU FIN
/**************************** ouverture de l'alerte et départ du jeu FIN *********************************************/



///////////////////////////////FONCTION TIMER DEBUT
const C = {
        mn : {val : 60 , DOM : document.getElementById("mn")},
        sec : {val : 60 , DOM : document.getElementById("sec")}
    };

function myTimer() {
const departMinutes = 60
let temps = departMinutes * 60
    setInterval(function() {
        let mn = parseInt(temps / 60, 10)
        let sec = parseInt(temps % 60, 10)
        mn = mn < 10 ? "0" + mn : mn
        sec = sec < 10 ? "0" + sec : sec
        C.mn.DOM.innerHTML = `${mn}`
        C.sec.DOM.innerHTML = `${sec}`
        if (temps <= 0) {
                temps = 0;
                endGame();
        }  else {
                temps --
        }
    }, 1)
}


///////////////////////////////FONCTION TIMER FIN



///////////////////////////////FONCTION JEU TERMINE DEBUT
function endGame () {
    if (C.mn.DOM.innerHTML == 00 && C.sec.DOM.innerHTML == 00){
        document.querySelector(".catchme").classList.remove("rotating");
    };
}
///////////////////////////////FONCTION JEU TERMINE FIN