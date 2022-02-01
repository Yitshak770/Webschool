/**************************** Mode d'emploi DEBUT *********************************************/

let manualButton = document.querySelector(".manual")
manualButton.addEventListener("click", manual);
function manual() {
    document.querySelector(".manual-text").classList.toggle("show");
    
}


/**************************** Mode d'emploi FIN *********************************************/

/**************************** cliquage sur le titre DEBUT *********************************************/
let myH1 = document.querySelector("#titre h1");
myH1.addEventListener("mouseenter", myHover);
function myHover() {
    myH1.innerHTML = " Do you want to start ?";
    document.querySelector("#titre h1").addEventListener("mouseleave", function() {
        this.innerHTML = " CATCH ME IF YOU CAN";
    });
};

/**************************** cliquage sur le titre FIN *********************************************/




///////////////////////////////FONCTION TIMER DEBUT
const C = {
    mn : {val : 60 , DOM : document.getElementById("mn")},
    sec : {val : 60 , DOM : document.getElementById("sec")}
};
let temps = 1;
function myTimer() {
    const departMinutes = 60
    temps = departMinutes * 60
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
    }, 100);
    return temps;
}
///////////////////////////////FONCTION TIMER FIN



///////////////////////////////FONCTION JEU TERMINE DEBUT
function endGame () {
    if (C.mn.DOM.innerHTML == 00 && C.sec.DOM.innerHTML == 00){
        myCatch.classList.remove("rotating");
        myCatch.classList.remove("rotating-100");
        myCatch.classList.remove("rotating-125");
        myCatch.classList.remove("rotating-150");
        myCatch.classList.remove("rotating-175");
    };
    document.querySelector("#ecran H3").innerHTML = " GAME OVER ";
    document.querySelector("#ecran H3").style.display = "block";
    myCatch.removeEventListener("mouseover", catchMove); 
    let stars = document.querySelectorAll(".stars");
    stars.forEach (function(x){
        x.classList.add("show");
    });
    myEcran.removeEventListener("click", myClicks);
    myCatch.removeEventListener("click", myWins)
    
}
///////////////////////////////FONCTION JEU TERMINE FIN


/**************************** déplacement du catchme DEBUT *********************************************/

let myEcran = document.querySelector("#ecran")
const height = myEcran.clientHeight;
const width = myEcran.clientWidth;
let myCatch = document.querySelector("#catchme");
// myCatch.addEventListener("mouseover", catchMove);
let nbr = 300;
function catchMove() {
    setTimeout(myMove, nbr);
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
// myEcran.addEventListener("click", myClicks);
// myCatch.addEventListener("click", myWins)
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
        case (clickCounter > 39 && clickCounter <41) :
            myLevelCpt = 5;
            nbr = 100;
            myCatch.classList.add("rotating-100");
            temps = temps + 600;
            break;
        case (clickCounter > 29 && clickCounter <31) :
            myLevelCpt = 4;
            nbr = 150;
            myCatch.classList.add("rotating-125");
            temps = temps + 600;
            break;
        case (clickCounter > 19 && clickCounter <21) :
            myLevelCpt = 3;
            nbr = 200;
            myCatch.classList.add("rotating-150");
            temps = temps + 600;
            break;
        case (clickCounter > 9 && clickCounter < 11) :
            myLevelCpt = 2;
            nbr = 250;
            myCatch.classList.add("rotating-175");
            temps = temps + 600;
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
    myCatch.classList.add("rotating");
    myCatch.addEventListener("mouseover", catchMove);  
    myTimer();
    myEcran.addEventListener("click", myClicks);
    myCatch.addEventListener("click", myWins)
};
///////////////////////////////FONCTION DEPART DU JEU FIN
/**************************** ouverture de l'alerte et départ du jeu FIN *********************************************/

/**************************** new game DEBUT *********************************************/
document.querySelector(".new-game").addEventListener("click", newGame);
function newGame() {
    //clearInterval
    //temps = 3600;
    document.querySelector("#ecran H3").innerHTML = "CLICK ON TITLE TO BEGIN";
    let stars = document.querySelectorAll(".stars");
    stars.forEach (function(x){
        x.classList.remove("show");
    });
    myHover()
    myH1.addEventListener("mouseenter", myHover);
    myH1.addEventListener("click", startGame);


    // myWinCpt = 0;
    // myScoreCpt = 0;
    // myLevelCpt = 1;
    // myMissedClicksCpt = 0;
    // clickCounter = 0;
}
/**************************** new game DEBUT *********************************************/
