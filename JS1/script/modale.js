
let modale = document.querySelector('modale')
let main = document.querySelector('main')
let buttonText = "Click here";

function createModaleButton(bD) {
    var btnDecl = document.createElement("button");
    btnDecl.id = "btn-decl";
    btnDecl.innerText = `${bD}`;
    main.appendChild(btnDecl);
}
createModaleButton(buttonText);

function createModaleHTML(t1,t2, l1, l2, bt1, bt2, inp2) {          // t1 = H2  -  t2 = H3  -  l1 = label1  -  l2 = label2  -  bt1 = bouton1  -  bt2 = bouton2  -  inp2 = 2 boutons
    
    var myModale = document.createElement("div");
    myModale.id = "modale";
    var modaleContainer = document.createElement("div");
    modaleContainer.id = "modale-container";

    var img = document.createElement("img");
            img.src = "./assets/close-W.png";
            img.id = "modale-close";
            modaleContainer.appendChild(img); 
            
            if (t1 || t2) {
                if(t1) {
                    var h2 = document.createElement("h2");         
                    h2.innerHTML = `${t1}`;           
                    modaleContainer.appendChild(h2);                           
                };  
                
                if(t2) {
                    var h3 = document.createElement("h3");         
                    h3.innerHTML = `${t2}`;           
                    modaleContainer.appendChild(h3); 
                };
            } else {
                alert ("erreur") 
            };
            
            
            var div1 = document.createElement("div");
            div1.id="modale-input";
            
            if(l1) {
                var label1 = document.createElement("label");
                // label.setAttribute("for", cat); 
                label1.htmlFor = `modale-input1`;                         
                label1.innerHTML = `${l1}`;
                div1.appendChild(label1);
            };
            
            var input1 = document.createElement("input");
            input1.type = "text";
            input1.id = "modale-input1";
            div1.appendChild(input1);
            
            if(inp2) {
                if(l2) {
                    var label2 = document.createElement("label");
                    // label.setAttribute("for", cat); 
                    label2.htmlFor = `modale-input2`;                         
                    label2.innerHTML = `${l2}`;
                        div1.appendChild(label2);
                    };
                    
                    var input2 = document.createElement("input");
                    input1.type = "text";
                    input2.id = "modale-input2";
                    div1.appendChild(input2);
                };
                
                modaleContainer.appendChild(div1);
                
                
                var div2 = document.createElement("div");
                div2.id="modale-button-container";
                
                var btn1 = document.createElement("button");
                btn1.id = "modale-cancel";
                btn1.innerText = `${bt1}`;
                div2.appendChild(btn1);
                
                if(bt2) {
                    var btn2 = document.createElement("button");
                    btn2.id = "modale-send";
                    btn2.innerText = `${bt2}`;
                    div2.appendChild(btn2);
                };
            
                modaleContainer.appendChild(div2);
                
                myModale.appendChild(modaleContainer);
                modale.appendChild(myModale);
            }

            let t1 = "H2"
            let t2 = "H3"
            let l1 = "label1"
            let l2 = "label2"
            let bt1 = "bouton1"
            let bt2 = "bouton2"
            let inp2 = 1 
createModaleHTML(t1,t2, l1, l2, bt1, bt2, inp2)          

document.querySelector("#btn-decl").addEventListener("click", myModale);     
document.querySelector("#modale-close").addEventListener("click", closeModale);
document.querySelector("#modale-cancel").addEventListener("click", closeModale);
document.querySelector("#modale-send").addEventListener("click", getInputs);
    
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