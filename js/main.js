// Elemek kiválasztása - a fv feladata 
// @param selector (neve a paraméternek): string (paraméter típusa) az elemet kiválasztó szelektor.

function _q( selector ) { // aláhúzás miatt rövid és gyorsan elérhető
    
    //  Elemek kiválasztása
    var elements = document.querySelectorAll(selector);
    
    return elements;
}

// Profil beviteli mező megjelenítése
function showProfile() {
    /*
    // megkeressük a profile div-et
    var div = document.querySelector(".profile-div");
    
    // írassuk ki, h megtaláltuk-e
    // console.log(div);
    
    // új osztály név hozzáadása
    div.classList.add("show");
    */
    
    // vizsgálat, hogy megkapta-e a show-t, ha igen akkor el kell venni
    var div = document.querySelector(".profile-div");
    
    // ha a show hozzá van adva: elrejtjük, különben megjelenítjük
    if (div.classList.contains("show")) {
        div.classList.remove("show");
    } else {
        div.classList.add("show");
    }
}