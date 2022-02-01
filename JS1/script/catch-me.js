/**************************** Mode d'emploi et tests DEBUT *********************************************/
document.querySelector(".test").addEventListener("click", test);
function test() {

}
let manualButton = document.querySelector(".manual")
manualButton.addEventListener("click", manual);
function manual() {
    document.querySelector(".manual-text").classList.toggle("show");
    
}


/**************************** Mode d'emploi et tests FIN *********************************************/

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
    document.querySelector("#ecran H3").innerHTML = " GAME OVER ";
    document.querySelector("#ecran H3").style.display = "block";
    myCatch.removeEventListener("mouseover", catchMove); 
    let stars = document.querySelectorAll(".stars");
    stars.forEach (function(x){
        x.classList.add("show");
    });
    
}
///////////////////////////////FONCTION JEU TERMINE FIN


/**************************** déplacement du catchme DEBUT *********************************************/

let myEcran = document.querySelector("#ecran")
const height = myEcran.clientHeight;
const width = myEcran.clientWidth;
let myCatch = document.querySelector("#catchme");
// myCatch.addEventListener("mouseover", catchMove);
function catchMove() {
    setTimeout(myMove, 300);
    function myMove() {
        let randY = Math.floor((Math.random() * height * 83/100) );
        let randX = Math.floor((Math.random() * width * 83/100) );
        myCatch.style.right = `${randX}px`;
        myCatch.style.top = `${randY}px`;
        // myCatch.style.transform = `translate(${randX}px, ${randY}px)`;
    }
};

/**************************** déplacement du catchme FIN *********************************************/


/**************************** décompte des points DEBUT *********************************************/


let myScore = document.querySelector("#controles .datas");
let myPoints = document.querySelector("#points .datas");
let myLevel = document.querySelector("#level .datas");
let myMissedClicks = document.querySelector("#clicks .datas");


let myWinCpt = 0;
let myScoreCpt = 0;
let myLevelCpt = 1;
let myMissedClicksCpt = 0;
let clickCounter = 0;


//----- Mode de calcul du score et des clicks perdus DEBUT -----//
myEcran.addEventListener("click", myClicks);
myCatch.addEventListener("click", myWins)
function myWins() {
    myWinCpt = 10*myLevelCpt
}
function myClicks() {
    if (myWinCpt == 10) {
        myScoreCpt = myScoreCpt + myWinCpt;
        myWinCpt = 0;
    } else {
        myScoreCpt = myScoreCpt -1*myLevelCpt;
        myMissedClicksCpt = myMissedClicksCpt + 1;
        myMissedClicks.innerHTML = `${myMissedClicksCpt}`;
    }
    myScore.innerHTML = `${myScoreCpt}`;
    
    //----- gestion des niveaux DEBUT -----//
    //chaque 10 clics on augmente de niveau
    //chaque niveau : + 10 au timer | 0.25 sec en moins dans vitesse rotation | 50 ms en moins dans le timeout 
    clickCounter ++;
    switch (true) {
        case (clickCounter > 49) :
            endGame()
            break;
        case (clickCounter > 39) :
            myLevelCpt = 5;
            //temps = temps + 10;
            break;
        case (clickCounter > 29) :
            myLevelCpt = 4;
            //temps = temps + 10;
            break;
        case (clickCounter > 19) :
            myLevelCpt = 3;
            //temps = temps + 10;
            break;
        case (clickCounter > 9) :
            myLevelCpt = 2;
            //temps = temps + 10;
            break;
        default:
            break;
    }
    myLevel.innerHTML = `${myLevelCpt}`;
    
    
    //----- gestion des niveaux FIN -----//
    
    
    



};

//----- Mode de calcul du score et des clicks perdus FIN -----//
/**************************** décompte des points FIN *********************************************/





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
    myCatch.addEventListener("mouseover", catchMove);  
    myTimer();
};
///////////////////////////////FONCTION DEPART DU JEU FIN
/**************************** ouverture de l'alerte et départ du jeu FIN *********************************************/