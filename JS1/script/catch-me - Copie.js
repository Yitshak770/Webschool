/**************************** Mode d'emploi DEBUT *********************************************/
let manualButton = document.querySelector(".manual")
manualButton.addEventListener("click", manual);
function manual() {
    document.querySelector(".manual-text").classList.toggle("show"); 
}
/**************************** Mode d'emploi FIN *********************************************/




/**************************** cliquages DEBUT *********************************************/
let myH1 = document.querySelector("#titre h1");
myH1.addEventListener("mouseenter", myHover);
function myHover() {
    myH1.innerHTML = " Do you want to start ?";
    document.querySelector("#titre h1").addEventListener("mouseleave", function() {
        this.innerHTML = " CATCH ME IF YOU CAN";
    });
};
myH1.addEventListener("click", startGame);
document.querySelector(".new-game").addEventListener("click", newGame);
/**************************** cliquage FIN *********************************************/




/**************************** timer chrono DEBUT *********************************************/
let myTest = 0;
let temps = 0;
let chrono = null;
const C = {
    sec : {val : 60 , DOM : document.getElementById("sec")},
    mili : {val : 00 , DOM : document.getElementById("mili")}
};
C.sec.DOM.innerHTML = "60";
C.mili.DOM.innerHTML = "00";
///////////////////////////////FONCTION TIMER DEBUT
function myInterval() {
    let seconds = parseInt(temps / 60);
    let miliseconds = parseInt(temps % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
    C.sec.DOM.innerHTML = `${seconds}`;
    C.mili.DOM.innerHTML = `${miliseconds}`;
    if (temps <= 0) {
        temps = 0;
        myTest = 11;
        endGame();
    }  else {
        temps --
    }
    return myTest;
};
function myTimer() {   
    if (myTest === 55) {
        chrono = setInterval(myInterval, 17); //17
    };
}
///////////////////////////////FONCTION TIMER FIN
/**************************** timer chrono FIN *********************************************/







/**************************** d??placement du catchme DEBUT *********************************************/
let myEcran = document.querySelector("#ecran")
const height = myEcran.clientHeight;
const width = myEcran.clientWidth;
let myCatch = document.querySelector("#catchme");

let nbr = 350;            ////// vitesse de reotation du catchme
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
/**************************** d??placement du catchme FIN *********************************************/





/**************************** d??compte des points DEBUT *********************************************/
let myScore = document.querySelector("#controles .datas");
let myPoints = document.querySelector("#points .datas");
let myLevel = document.querySelector("#level .datas");
let myMissedClicks = document.querySelector("#clicks .datas");

let myWinCpt = 0;
let myScoreCpt = 0;
let myLevelCpt = 1;
let myMissedClicksCpt = 0;
// let clickCounter = 0;
let clickWinCounter = 0;
let myPointsCpt = 10;

myPoints.innerHTML = `${myPointsCpt}`;
myLevel.innerHTML = `${myLevelCpt}`;
myScore.innerHTML = `${myScoreCpt}`; 
myMissedClicks.innerHTML = `${myMissedClicksCpt}`;

//----- Mode de calcul du score et des clicks perdus DEBUT -----//
function myWins() {
    myWinCpt = 10*myLevelCpt
    clickWinCounter ++;
    myPointsCpt --;
    if (myPointsCpt < 1){myPointsCpt = 10};
    myPoints.innerHTML = `${myPointsCpt}`;
}
function myClicks() {
    if (myWinCpt == 10 || myWinCpt == 20 || myWinCpt == 30 || myWinCpt == 40 || myWinCpt == 50) {
        myScoreCpt = myScoreCpt + myWinCpt;
        myWinCpt = 0;
    } else {
        myScoreCpt = myScoreCpt -1*myLevelCpt;
        myMissedClicksCpt ++;
        myMissedClicks.innerHTML = `${myMissedClicksCpt}`;
    }
    myScore.innerHTML = `${myScoreCpt}`;   
    //----- gestion des niveaux DEBUT -----//
    //chaque 10 clics gagnant on augmente de niveau
    //chaque niveau : + 10 au timer | 0.25 sec en moins dans vitesse rotation | 50 ms en moins dans le timeout  
    switch (true) {
        case (clickWinCounter > 49) :
            endGame()
            break;
        case (clickWinCounter > 39 && clickWinCounter <41) :
            myLevelCpt = 5;
            nbr = 150;
            myCatch.classList.add("rotating-100");
            temps = temps + 600;
            break;
        case (clickWinCounter > 29 && clickWinCounter <31) :
            myLevelCpt = 4;
            nbr = 200;
            myCatch.classList.add("rotating-125");
            temps = temps + 600;
            break;
        case (clickWinCounter > 19 && clickWinCounter <21) :
            myLevelCpt = 3;
            nbr = 250;
            myCatch.classList.add("rotating-150");
            temps = temps + 600;
            break;
        case (clickWinCounter > 9 && clickWinCounter < 11) :
            myLevelCpt = 2;
            nbr = 300;
            myCatch.classList.add("rotating-175");
            temps = temps + 600;
            break;
    }
    myLevel.innerHTML = `${myLevelCpt}`;                        
    //----- gestion des niveaux FIN -----//                          
};
//----- Mode de calcul du score et des clicks perdus FIN -----//
/**************************** d??compte des points FIN *********************************************/
                        
                        
                        
                        
                        
/**************************** d??part et fin du jeu DEBUT *********************************************/
///////////////////////////////FONCTION DEPART DU JEU DEBUT
function startGame() {    
    alert("Are you ready ?");
    temps = 3600;
    myTest = 55;
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

///////////////////////////////FONCTION JEU TERMINE DEBUT
let hisName = "noname";
let hisPoints = 0;
let hisDate = new Date().getTime();
let playerArr = [];
function endGame () {
    if (C.sec.DOM.innerHTML == 00 && C.mili.DOM.innerHTML == 00){
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
    myCatch.removeEventListener("click", myWins);
    clearInterval(chrono);
    hisName = prompt("what is your name ?").toLowerCase();
    hisName = hisName.slice(0,1).toUpperCase() + hisName.slice(1);  
    
    playerArr = JSON.parse(localStorage.allPlayers);    // r??cup??re le array des joueurs
    hisPoints = myScoreCpt - myMissedClicksCpt;             // totalise ses points
    
    let newPlayer = new player(hisName, hisPoints, hisDate);   
    
    playerArr.push(newPlayer); // ajoute le nouveau joueur dans le array des joueurs
    
    
    playerArr.sort((a, b) => {                              // trie le array des joueurs
        return b.hisPoints - a.hisPoints;
    });
    playerArr.pop();                                        // enl??ve le dernier joueur
    localStorage.allPlayers = JSON.stringify(playerArr); // envoie le tableau ?? jour vers le local storage
    afficheWinners();
    
}
///////////////////////////////FONCTION JEU TERMINE FIN
/**************************** d??part et fin du jeu FIN *********************************************/




/**************************** hight scores 5 premiers DEBUT *********************************************/
  

let fisrtWinnerScore = document.querySelector("#first .score-winner p");
let firstWinnerName = document.querySelector("#first h6");
let myFirstWinnerDate = document.querySelector("#first .date-winner p")
let secondWinnerScore = document.querySelector("#second .score-winner p");
let secondWinnerName = document.querySelector("#second h6");
let mySecondWinnerDate = document.querySelector("#second .date-winner p")
let thirdWinnerScore = document.querySelector("#third .score-winner p");
let thirdWinnerName = document.querySelector("#third h6");
let myThirdWinnerDate = document.querySelector("#third .date-winner p")
let fourthWinnerScore = document.querySelector("#fourth .score-winner p");
let fourthWinnerName = document.querySelector("#fourth h6");
let myFourthdWinnerDate = document.querySelector("#fourth .date-winner p")
let fifthWinnerScore = document.querySelector("#fifth .score-winner p");
let fifthWinnerName = document.querySelector("#fifth h6");
let myFifthWinnerDate = document.querySelector("#fifth .date-winner p")

playerArr = JSON.parse(localStorage.allPlayers);    // r??cup??re le array des joueurs
let firstWinnerDate = playerArr[0].hisDate;
let secondWinnerDate = playerArr[1].hisDate;
let thirdWinnerDate = playerArr[2].hisDate;
let fourthWinnerDate = playerArr[3].hisDate;
let fifthWinnerDate = playerArr[4].hisDate;
afficheWinners(fisrtWinnerScore, firstWinnerName, firstWinnerDate, myFirstWinnerDate, 0);
afficheWinners(secondWinnerScore, secondWinnerName, secondWinnerDate, mySecondWinnerDate, 1);
afficheWinners(thirdWinnerScore, thirdWinnerName, thirdWinnerDate, myThirdWinnerDate, 2);
afficheWinners(fourthWinnerScore, fourthWinnerName, fourthWinnerDate, myFourthdWinnerDate, 3);
afficheWinners(fifthWinnerScore, fifthWinnerName, fifthWinnerDate, myFifthWinnerDate, 4);

function afficheWinners(a, b, c, d, e) {
    a.innerHTML = playerArr[e].hisPoints;
    b.innerHTML = playerArr[e].hisName;
    
    a.addEventListener("mouseover", displayDate);
    b.addEventListener("mouseover", displayDate);
    a.addEventListener("mouseout", dontDisplayDate);
    b.addEventListener("mouseout", dontDisplayDate);
    
    d.innerHTML = Intl.DateTimeFormat("fr").format(new Date(c));
   
    function displayDate() {
        d.style.visibility = "visible";   
        };
    function dontDisplayDate() {
        d.style.visibility = "hidden";   
        };    
}


class player {
    constructor(_hisName, _hisPoints, _hisDate) {
        this.hisName = _hisName;
        this.hisPoints = _hisPoints;
        this.hisDate = _hisDate;
    }
}





/**************************** hight scores 5 premiers FIN *********************************************/





/**************************** new game DEBUT *********************************************/
function newGame() {
    myTest = 15;
    clearInterval(chrono);
    C.mn.DOM.innerHTML = "60";
    document.querySelector("#ecran H3").innerHTML = "CLICK ON TITLE TO BEGIN";
    let stars = document.querySelectorAll(".stars");
    stars.forEach (function(x){
        x.classList.remove("show");
    });
    myHover()
    myH1.addEventListener("mouseenter", myHover);
    myH1.addEventListener("click", startGame);
    
    myWinCpt = 0;
    myScoreCpt = 0;
    myLevelCpt = 1;
    myMissedClicksCpt = 0;
    clickCounter = 0;
    clickWinCounter = 0;
    myPointsCpt = 10;
    myPoints.innerHTML = `${myPointsCpt}`;
    myLevel.innerHTML = `${myLevelCpt}`;
    myScore.innerHTML = `${myScoreCpt}`; 
    myMissedClicks.innerHTML = `${myMissedClicksCpt}`;

}
/**************************** new game FIN *********************************************/