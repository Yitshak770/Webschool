let nbCard = prompt ("how many cards do you want ?");
let cards = [];
var tries = 0;
var found = 0;
var mess = "";
var randPos = [];
var finalArr = [];


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
createCardHTML();

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
    
    var H31 = document.createElement("H3");
    H31.className = "nb-tries";
    H31.innerHTML = `Number of tries : 0`;
    myDiv.appendChild(H31);
    
    var H32 = document.createElement("H3");
    H32.className = "result";
    H32.innerHTML = `Your message : `;
    myDiv.appendChild(H32);
    
    
    
    finalArr.forEach(function(i) {
        var card = document.createElement("div");
        if (i % 2 == 0) {
            card.className = "card card-pair"; 
        } else {
            card.className = "card card-impair"; 
        }
        
        var H4 = document.createElement("H4");
        H4.className = "text-inside";
        H4.innerHTML += i;
        card.appendChild(H4);
        
        myDiv.appendChild(card);
        
        card.addEventListener("click", function(){
            tries++;
            if (card.className == "card card-pair") {
                card.style.backgroundColor = "green";
                H4.style.display = "block";
                found ++;
                if (found > nbCard/2-1) {
                    mess = "Click on MEMORY" ; 
                }
            }
            
            H31.innerHTML = `Number of tries : ${tries}`;
            H32.innerHTML = `Your message : <span class = "msg">${mess}</span>`;
        });
    });
    
}
var myCard = document.querySelectorAll(".card");
var myButton = document.querySelector(".memory p");
var myH4 = document.querySelectorAll("H4");
var myH3 = document.querySelector(".nb-tries");
var myMessage = document.querySelector(".msg");
console.log (myMessage)

myButton.addEventListener("click", gameOver);

function gameOver() {
    
    
    
    tries = 0;
    found = 0;
    myH3.innerHTML = `Number of tries : 0`;
    mess = "";
    // myMessage.innerText = `${mess}`;    
  
    
    myCard.forEach(function(x) {
        x.style.backgroundColor = "rgb(231, 143, 143)";
        myH4.forEach(function(y) {
            y.style.display = "none";
        });
        
    });


    
    if (found > nbCard/2-1 && tries < nbCard/2+1) {
        mess = "You Win !!!"
    };
}

