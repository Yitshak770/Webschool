/*TEST1*/

function ajouteCarres(a,b) {
    function carre(x) {
        return x * x;
    }
    return carre(a) + carre(b);
}
var res1 = ajouteCarres(2,3); // renvoie 13
var res2 = ajouteCarres(3,4); // renvoie 25
var res3 = ajouteCarres(4,5); // renvoie 41


var tests = document.querySelector(".tests");
var div = document.createElement("div");
div.className = "my div"; 
div.innerHTML = `bonjour ${res1}`;
tests.appendChild(div);
 
 
 /*TEST2*/
 function toto() {
     // var y;
     y=2;
     // return 10
     return y
    }
    
    
    var x = 0;
    var z = 0;
    
    z=toto(x);
    
    // alert(z);
    
    
    /*TEST3*/
    let t = 2;
    // var tot = 0;
    
    function fixe(a) {
        let tot = a * t
        return tot;
    }
    
    A = fixe(10)
    
    // alert(A)
    
    /*TEST4*/
    function showNames (n , j) {
        mess = `${j}:  ${n}`;
        return mess;
    }

    const PPL = ["Tim", "Bob", "Mike"];
    
    PPL.pourchak = function(callback) {
        for (let i = 0; i < PPL.length; i++) {
            const element = PPL[i];
            callback(element, i);
        }
    }
    
    
    PPL.pourchak(showNames);

    console.log (mess)
    
    // showNames(PPL[0], 0);
    // alert(mess);

    
    
    
    // for(var i=0; i<=myArray.length; i++) {
        //     let j = i+1
        //     window['arr'+j] = myArray[i];
        // }
        
    var myArray = [[10, 20, 30, 40], [22, 10, 12, 14], [16, 18, 42, 22]];
    let j = 0;
    myArray.forEach( i => {
        j++
        window['arr'+j] = myArray[j-1];
    });

    div.innerText += `.\n Au départ j'ai le Array ci-dessous qui contient 3 Arrays \n [[10, 20, 30, 40], [22, 10, 12, 14], [16, 18, 42, 22]] \n je veux récupérer les 3 arrays de façon indépendante et voici le résultat :  \narr1 = ${arr1} ;\n arr2 = ${arr2} ;\n arr3 = ${arr3}. \n La difficulté était de créer arr1, arr2 et arr3 de façon dynamique afin que cela fonctionne quel que soit le nombre de arrays contenus dans le array de départ.`
    ;
    
    
   