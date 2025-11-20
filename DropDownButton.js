const DropDownButton1 = document.getElementById("DropDownButton1");
const Lyrics1 = document.getElementById("Lyrics1");

Lyrics1.style.display ="none";

DropDownButton1.addEventListener("click", (event) => {
    if(Lyrics1.style.display == "none"){
        Lyrics1.style.display ="block";
    } else {
        Lyrics1.style.display ="none";
    }
});

const DropDownButton2 = document.getElementById("DropDownButton2");
const Lyrics2 = document.getElementById("Lyrics2");

Lyrics2.style.display ="none";

DropDownButton2.addEventListener("click", (event) => {
    if(Lyrics2.style.display == "none"){
        Lyrics2.style.display ="block";
    } else {
        Lyrics2.style.display ="none";
    }
});