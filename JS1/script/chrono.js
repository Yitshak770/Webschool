const C = {
    hr : {val : 0 , DOM : document.getElementById("hr")},
    mn : {val : 0 , DOM : document.getElementById("mn")},
    sec : {val : 0 , DOM : document.getElementById("sec")}
};




let startC = document.getElementById("start");
let stopC = document.getElementById("stop");


startC.addEventListener("click", myStart);
function myStart() {
    startC.removeEventListener("click", myStart);
    let chrono = setInterval(function() {
        if ( C.sec.val < 59 ) {
            C.sec.val ++;
            C.sec.val < 10 
                ? C.sec.DOM.innerHTML = `0${C.sec.val}` 
                : C.sec.DOM.innerHTML = C.sec.val;
        } else {
            C.sec.val = 00;
            C.sec.DOM.innerHTML = "00";
            C.mn.val < 10 
                ? C.mn.DOM.innerHTML = `0${C.mn.val}` 
                : C.mn.DOM.innerHTML = C.mn.val;
            C.mn.val = 01;
        }
    }, 100);
    stopC.addEventListener("click", myStop);
    function myStop() {
        clearInterval(chrono);
        startC.addEventListener("click", myStart);
    }
    stopC.addEventListener("dblclick", myStopReset);
        function myStopReset() {
            clearInterval (chrono); 
            startC.addEventListener("click", myStart);
            C.sec.val = 00;
            C.sec.DOM.innerHTML = "00";
            C.mn.val = 00;
            C.mn.DOM.innerHTML = "00";
            C.hr.val = 00;
            C.hr.DOM.innerHTML = "00";
        };
}



// function chronoSec() {
//     // C.sec.DOM.innerHTML = `00`;
//     C.sec.val++;
//     C.sec.val<10 ? C.sec.DOM.innerHTML = `0${C.sec.val}` : C.sec.DOM.innerHTML = C.sec.val;
//     stopC.addEventListener("dblclick", stop0CH)
    
// }

// function chronoNew() {
//     C.sec.DOM.innerHTML = `00`;
//     C.sec.val++;
//     C.sec.val<10 ? C.sec.DOM.innerHTML = `0${C.sec.val}` : C.sec.DOM.innerHTML = C.sec.val;
// }

// // const SEC = setInterval(chronoSec,1000);


//     function startCH() {
//         // C.sec.DOM.innerHTML = `00`; 
//         var SEC = setInterval (chronoSec,100);
//         startC.removeEventListener("click", startCH);
//         stopC.addEventListener("click", stopCH);
//         // stopC.addEventListener("dblclick", stop0CH);
//         function stopCH() {
//             clearInterval (SEC); 
//             // C.sec.DOM.innerHTML = `00`; 
//             startC.addEventListener("click", startCH);
//         };
//         // function stop0CH() {
//         //     clearInterval (SEC); 
//         //     C.sec.DOM.innerHTML = `00`;
//         //     var SEC0 = setInterval (chronoNew,1000);
//         //     clearInterval (SEC0)
             
//         //     startC.addEventListener("click", startCH);
//         // };
//     };




// // console.log (SEC) 