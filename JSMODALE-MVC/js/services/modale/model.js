// import {User} from "./classes/user.js";

function myModale() {
    const myTimeout = setTimeout(() => {
        document.querySelector("#modale").style.visibility = "visible";
        document.querySelector("#modale").style.opacity = 1;
    }, 100);
        
}

function closeModale() {
    document.querySelector("#modale").style.visibility = "hidden";
    document.querySelector("#modale").style.opacity = 0;
}

function getInputs() {
    let myInput1 = document.querySelector("#modale-input1");
    let myInput2 = document.querySelector("#modale-input2");
    closeModale();
    const myTimeout = setTimeout( () => {
        alert (`Voici le input 1 : ${myInput1.value} et le input 2 : ${myInput2.value}`)

    }, 50);
}

export { myModale, closeModale, getInputs };                  // exporte les fonctions vers controller.js