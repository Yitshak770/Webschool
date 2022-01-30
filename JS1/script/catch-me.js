document.querySelector("#titre h1").addEventListener("mouseenter", function() { 
    this.innerHTML = " Do you want to start ?";
});
document.querySelector("#titre h1").addEventListener("mouseleave", function() {
    this.innerHTML = " CATCH ME IF YOU CAN";
});
document.querySelector("#titre h1").addEventListener("click", function() {
    alert("Are you ready ?");
    document.querySelector("#ecran H3").style.display = "none";
    let myDisplays = document.querySelectorAll(".datas");
    myDisplays.forEach (function(x) {
        x.style.display="block";
    }); 
      
});



