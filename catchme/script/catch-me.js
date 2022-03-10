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
    this.style.cursor ="pointer";
    myH1.innerHTML = " Do you want to start ?";
    document.querySelector("#titre h1").addEventListener("mouseleave", function() {
        this.innerHTML = " CATCH ME IF YOU CAN";
    });
};
myH1.addEventListener("click", starting);
function starting() {
    if (window.innerWidth > 1299) {
        openModale(`Are you ready ?`, "No", "Yes", START)
    } else {
        openModale("your creen is too small to play this game, you need at least 1300 pixels and your screen is " + window.innerWidth + " pixels")
    }
}

/**************************** cliquage FIN *********************************************/




/**************************** timer chrono DEBUT *********************************************/
let myTest = 0;
let chrono = null;
const C = {
    sec : {val : 60 , DOM : document.getElementById("sec")},
    mili : {val : 00 , DOM : document.getElementById("mili")}
};
C.sec.DOM.innerHTML = "60";
C.mili.DOM.innerHTML = "00";
let miliseconds = 99;
let seconds = 59;
///////////////////////////////FONCTION TIMER DEBUT
function myInterval() {
    miliseconds --;
    C.sec.DOM.innerHTML = seconds;
    if (miliseconds < 0) {
        miliseconds = 99;
        seconds --;
    }
    (seconds < 10) ? C.sec.DOM.innerHTML = `0${seconds}` : seconds = seconds;
    (miliseconds < 10) ? miliseconds = `0${miliseconds}` : miliseconds = miliseconds;
    C.mili.DOM.innerHTML = miliseconds;
    if(seconds < 1 && miliseconds < 1) {
        C.mili.DOM.innerHTML = "00";
        myTest = 11;
        clearInterval(chrono);
        setTimeout(endGame, 1500);     
  }
  }
function myTimer() {   
    if (myTest === 55) {
        chrono = setInterval(myInterval, 10); 
    };
}
///////////////////////////////FONCTION TIMER FIN
/**************************** timer chrono FIN *********************************************/







/**************************** déplacement du catchme DEBUT *********************************************/
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
            myCatch.style.animationDuration = "1s";
            seconds = seconds + 10;
            break;
        case (clickWinCounter > 29 && clickWinCounter <31) :
            myLevelCpt = 4;
            nbr = 200;
            myCatch.style.animationDuration = "1.25s";
            seconds = seconds + 10;
            break;
        case (clickWinCounter > 19 && clickWinCounter <21) :
            myLevelCpt = 3;
            nbr = 250;
            myCatch.style.animationDuration = "1.5s";
            seconds = seconds + 10;
            break;
        case (clickWinCounter > 9 && clickWinCounter < 11) :
            myLevelCpt = 2;
            nbr = 300;
            myCatch.style.animationDuration = "1.75s";
            seconds = seconds + 10;
            break;
    }
    myLevel.innerHTML = `${myLevelCpt}`;                        
    //----- gestion des niveaux FIN -----//                          
};
//----- Mode de calcul du score et des clicks perdus FIN -----//
/**************************** décompte des points FIN *********************************************/
                        
                        
                        
                        
                        
/**************************** départ et fin du jeu DEBUT *********************************************/

///////////////////////////////CREATION DE LA MODALE
let modale = document.querySelector('modale');
let main = document.querySelector('main');
let myStartButton = "";

function modaleHtml(modaleText, button1Text, button2Text, myFunction, input) {                                                     
    var myModale = document.createElement("div");
    myModale.id = "modale";
    var modaleContainer = document.createElement("div");
    modaleContainer.id = "modale-container";

    var img = document.createElement("img");
            img.src = "./assets/close-W.png";
            img.id = "modale-close";
            modaleContainer.appendChild(img); 
            
    var h2 = document.createElement("h2");         
    h2.innerHTML = `${modaleText}`;           
    modaleContainer.appendChild(h2);  
    
    if (input) {
        var div1 = document.createElement("div");
        div1.id="modale-input";
    
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.id = "modale-input1";
        div1.appendChild(input1);
    
        modaleContainer.appendChild(div1);
    }
                
    var div2 = document.createElement("div");
    div2.id="modale-button-container";
    
    if (button1Text) {
        var btn1 = document.createElement("button");
        btn1.id = "modale-cancel";
        btn1.innerText = `${button1Text}`;
        div2.appendChild(btn1);
    }
    
    if (button2Text) {
        var btn2 = document.createElement("button");
        btn2.id = "modale-send";
        btn2.innerText = `${button2Text}`;
        div2.appendChild(btn2);
    }
    
    modaleContainer.appendChild(div2);
    
    myModale.appendChild(modaleContainer);
    modale.appendChild(myModale);

    myStartButton = document.querySelector("#modale-send");
    if (button2Text) {
        myStartButton.addEventListener("click", myFunction);
    }

    if (button1Text) {
        document.querySelector("#modale-cancel").addEventListener("click", closeModale);
    }
    document.querySelector("#modale-close").addEventListener("click", closeModale);

}

///////////////////////////////OUVERTURE ET FERMETURE DE LA MODALE

function openModale(a, b , c, d, e) {
    modaleHtml(a, b , c, d, e);
    const myTimeout = setTimeout(() => {
        document.querySelector("#modale").style.visibility = "visible";
        document.querySelector("#modale").style.opacity = 1;
    }, 50);       
}

function closeModale() {
    document.querySelector("#modale").style.visibility = "hidden";
    document.querySelector("#modale").style.opacity = 0;
    modale.innerText = "";
}

///////////////////////////////FONCTION openModale DEBUT
const START = function startYourGame() { 
    myStartButton.removeEventListener("click", START);
    closeModale()   
    miliseconds = 99;
    seconds = 59;//----------------------------------------------------------------------------------------------------------------------------
    myTest = 55;
    myH1.style.cursor ="default";
    myH1.removeEventListener("mouseenter", myHover);
    myH1.removeEventListener("click", starting);
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

///////////////////////////////FONCTION openModale FIN

///////////////////////////////FONCTION ENDGAME DEBUT
class player {
    constructor(_hisName, _hisPoints, _hisDate) {
        this.hisName = _hisName;
        this.hisPoints = _hisPoints;
        this.hisDate = _hisDate;
    }
}

let hisName = "noname";
let hisPoints = 0;
let hisDate = new Date().getTime();
let json = localStorage.allPlayers;
let playerArr = json ? JSON.parse(json) : [];



function endGame () {
    if (C.sec.DOM.innerHTML == 00 && C.mili.DOM.innerHTML == 00){
        myCatch.classList.remove("rotating");
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
    
    const END = function() {

        let modaleInput = document.querySelector("#modale-input1")     
        hisName = modaleInput.value; 

       
            hisName = hisName.toLowerCase();
            hisName = hisName.slice(0,1).toUpperCase() + hisName.slice(1);  
        
        
        myStartButton.removeEventListener("click", END);
        closeModale()    
        console.log(hisName);


        //playerArr = JSON.parse(json);    // récupère le array des joueurs
        hisPoints = myScoreCpt - myMissedClicksCpt;             // totalise ses points
        
        let newPlayer = new player(hisName, hisPoints, hisDate);   
        
        playerArr.push(newPlayer); // ajoute le nouveau joueur dans le array des joueurs
        
        playerArr.sort((a, b) => {                              // trie le array des joueurs
            return b.hisPoints - a.hisPoints;
        });
        if (playerArr.length > 5) playerArr.pop();                                        // enlève le dernier joueur
        localStorage.allPlayers = JSON.stringify(playerArr); // envoie le tableau à jour vers le local storage
        affiche5Winners ();
        
        document.querySelector(".new-game").addEventListener("click", newGame);

    }
        
    openModale("what is your name ?", "Cancel", "Send", END, "0");

}



///////////////////////////////FONCTION ENDGAME FIN
/**************************** départ et fin du jeu FIN *********************************************/




/**************************** hight scores 5 premiers DEBUT *********************************************/

let winnersDOM = document.querySelector("#winners");

function affiche5Winners() { 
    //playerArr = JSON.parse(localStorage.allPlayers);    // récupère le array des joueurs
    var toAppend = `<div class="title">High scores</div>`;
    if (playerArr.length > 0) {

      playerArr.forEach((x, i) => {
          toAppend += `<div class = "winner" id="winner${i}">
          <div class="date-winner"><p>${Intl.DateTimeFormat("fr").format(new Date(playerArr[i].hisDate))}</p></div>
          <div class="score-winner">
          <p>${x.hisPoints}</p>
          </div>
          <h6>${x.hisName}</h6>
          </div>
          `; 
        });
        
        winnersDOM.innerHTML = toAppend;
    
    }
}

affiche5Winners();

/**************************** hight scores 5 premiers FIN *********************************************/





/**************************** new game DEBUT *********************************************/
function newGame() {
    myTest = 15;
    clearInterval(chrono);
    myCatch.style.top = "15px";
    myCatch.style.left = "10px";
    C.sec.DOM.innerHTML = "60";
    document.querySelector("#ecran H3").innerHTML = "CLICK ON TITLE TO BEGIN";
    let stars = document.querySelectorAll(".stars");
    stars.forEach (function(x){
        x.classList.remove("show");
    });
    //myHover()
    myH1.addEventListener("mouseenter", myHover);
    myH1.addEventListener("click", starting);
    myH1.style.cursor ="pointer";
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