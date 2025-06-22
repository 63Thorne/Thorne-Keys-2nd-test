const myShowButton = document.getElementById("ShowInversion");
const Inversion1 = document.querySelectorAll("#Inv");

myShowButton.addEventListener('click', event => {
    
    Inversion1.forEach(Inversion1 => {
      Inversion1.style.visibility = "visible"; 
    
})

    });


const myHideButton = document.getElementById("HideInversion");
const Inversion = document.querySelectorAll("#Inv");

myHideButton.addEventListener('click', event => {
    
    Inversion.forEach(Inversion => {
      Inversion.style.visibility = "hidden"; 
    
})                                                                                                                                          

    });


const myShowBassButton = document.getElementById("ShowBass");
const Bass1 = document.querySelectorAll(".Bass");

myShowBassButton.addEventListener('click', event => {
    
    Bass1.forEach(Bass1 => {
      Bass1.style.visibility = "visible"; 
    
})

    });


const myHideBassButton = document.getElementById("HideBass");
const Bass = document.querySelectorAll(".Bass");

myHideBassButton.addEventListener('click', event => {
    
    Bass.forEach(Bass => {
      Bass.style.visibility = "hidden"; 
    
})

    });



