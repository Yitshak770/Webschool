import sheet from "./style.css" assert { type: "css" };

var main = document.querySelector("main");

function open() {
    document.adoptedStyleSheets = [sheet];
    main.innerHTML = "";
    main.innerHTML = `<h1>Welcome to Dashboard component</h1>`;
};

export { open };