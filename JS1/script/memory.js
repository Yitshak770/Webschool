let nbCard = prompt ("how many cards do you want ?");
let cards = [];
var tries = 0;
var found = 0;
var mess = "";
var randPos = [];
var finalArr = [];
var seconds = "00";
var card = null;
var H4 = "";
var H31 = "";
var H32 = "Your message : "
var cpt = "";

/*creation du array de cartes*/
for (let i = 0; i < nbCard; i++) {
    cards.push(i);
};


/*randomisation d'un array qui va servir a ordonner les cartes*/
for (var j = 0; randPos.length < nbCard; j++) {
    
    var num = parseInt(Math.random () * nbCard);
    if (!randPos.includes(num)) {
        randPos.push(num);
    }   
};
randPos.forEach(function(x) {
    finalArr.push(cards[x]);

});


/*creation du html*/
if (nbCard > 3) {
    createCardHTML();
} 

function createCardHTML () {

    let a = document.querySelector(".main-jeux");
   
    var div = document.createElement("div");
    div.className = "jeux1";                        
    a.appendChild(div);

    var myDiv = document.querySelector(".jeux1");
    
    var H30 = document.createElement("H3");
    H30.className = "memory";
    myDiv.appendChild(H30);

    var p = document.createElement("p");
    p.innerHTML = `MEMORY`;
    H30.appendChild(p);

    cpt = document.createElement("H3");
    cpt.className = "chrono";
    cpt.innerHTML = `<div class = "time" id="mn">00</div>:<div class = "time" id ="sec">00</div>`;
    myDiv.appendChild(cpt);
    
    H31 = document.createElement("H3");
    H31.className = "nb-tries";
    H31.innerHTML = `Number of tries : 0`;
    myDiv.appendChild(H31);
    
    H32 = document.createElement("H3");
    H32.className = "result";
    H32.innerHTML = `Your message : `;
    myDiv.appendChild(H32);
     
    finalArr.forEach(function(i) {
        card = document.createElement("div");
        if (i % 2 == 0) {
            card.className = "card card-pair"; 
        } else {
            card.className = "card card-impair"; 
        }
        
        H4 = document.createElement("H4");
        H4.className = "text-inside";
        H4.innerHTML += i;
        card.appendChild(H4);

        myDiv.appendChild(card);    
    });
    
};


/*ouverture du jeu*/
myInit();

mess = "Click on MEMORY" ; 
H32.innerHTML = `Your message : <span class = "msg">${mess}</span>`;

function myInit(){
    
    var myH4Arr = document.querySelectorAll(".text-inside");
    var cardArr = document.querySelectorAll(".card");
    
    cardArr.forEach(function(myCard){
        found ++;
        if (myCard.className == "card card-pair") {
            myCard.style.backgroundColor = "green";
        }
    });
    myH4Arr.forEach(function(myH4){
        
        if (myH4.parentElement.className == "card card-pair") {
            myH4.style.display = "block";
        }
    });
};
    
    var myCard = document.querySelectorAll(".card");
    var myButton = document.querySelector(".memory p");
    var myH4 = document.querySelectorAll("H4");
    var myH3 = document.querySelector(".nb-tries");
    var myMessage = null; 
    
    myButton.addEventListener("click", myGameComplete);
    
    function myGameComplete() {

        /*remise à zéro*/

        myButton.removeEventListener("click", myGameComplete);
        
        tries = 0;
        found = 0;
        mess = "";
        H32.innerHTML = `Your message : `;    
        
        myCard.forEach(function(x) {
            x.style.backgroundColor = "rgb(231, 143, 143)";
            myH4.forEach(function(y) {
                y.style.display = "none";
            }); 
        });
        
        /*lancement du compteur*/
        const C = {
            mn : {val : 0 , DOM : document.getElementById("mn")},
            sec : {val : 0 , DOM : document.getElementById("sec")}
        };
    
        var chrono = setInterval(function() {
            if ( C.sec.val < 59 ) {
                C.sec.val ++;
                C.sec.val < 10 
                    ? C.sec.DOM.innerHTML = `0${C.sec.val}` 
                    : C.sec.DOM.innerHTML = C.sec.val;
            } else {
                C.sec.val = 00;
                C.sec.DOM.innerHTML = "00";
                C.mn.val ++;
                C.mn.val < 10 
                    ? C.mn.DOM.innerHTML = `0${C.mn.val}` 
                    : C.mn.DOM.innerHTML = C.mn.val;
            }
        }, 100);
        
        function myStop() {
            clearInterval (chrono); 
        };

        /*début du jeu*/
        var myPlayCardArr = document.querySelectorAll(".card");
        
        myPlayCardArr.forEach(function(z){
            
            z.addEventListener("click", myGame);
            function myGame() {
                
                tries ++;
                H31.innerHTML = `Number of tries : ${tries}`;
                if (z.className == "card card-pair") {
                    found ++;
                    z.style.backgroundColor = "green";
                    z.firstChild.style.display = "block";
                    z.removeEventListener("click",myGame);
                    if (found == nbCard/2 && tries > parseInt(nbCard/1.8) ) {
                        mess = "Too much tries - Game over" ;
                        myStop();
                    }
                    if (found == nbCard/2 && tries <= parseInt(nbCard/1.8) ) {
                        mess = "You Win !!!" ;
                        myStop();    
                        const myTimeout = setTimeout(myGreeting, 1000);
                        function myGreeting() {
                            let nameWinner = prompt ("what is your name ?");
                            alert(`Congratulation ${nameWinner}, you have played with ${nbCard} cards and won in ${tries} tries within ${C.mn.DOM.innerHTML}:${C.sec.DOM.innerHTML} seconds` );
                        }
                    }
                }
                H32.innerHTML = `Your message : <span class = "msg">${mess}</span>`;
                z.removeEventListener("click",myGame);;  
            };
        });
    };
    




    