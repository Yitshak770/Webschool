

var main = document.querySelector(".login-container");
var userJSON = localStorage.user;
var userObj = {};

userJSON && userObj.password == 123 ? welcome () : login();

function welcome() {
    userObj = JSON.parse(userJSON);
    main.innerHTML = `<p class = "welcome">Welcome, ${userObj.name}</p>`;
}

function login() {
    var html = `<H2 class = "login">Please login first</H2>
    <input type = "text" class = "name" placeholder = "Please enter your name">
    <input type = "text" class = "email" placeholder = "Please enter your E-mail">
    <input type = "password" class = "password" placeholder = "Please enter your password">
    <input type = "submit" class = "submit" value = "Login">
    `;
    main.innerHTML = html ;
    document.querySelector(".submit").addEventListener("click", function() {
        userObj.name = document.querySelector(".name").value;
        userObj.email = document.querySelector(".email").value;
        userObj.password = document.querySelector(".password").value;
        var x = JSON.stringify(userObj);
        localStorage.user = x ;
        main.innerHTML = `<p class = "welcome">Welcome, ${userObj.name}</p>`;
    })

}
