// Elemek kiválasztása - a fv feladata 
// @param selector (neve a paraméternek): string (paraméter típusa) az elemet kiválasztó szelektor.

function _q( selector ) { // aláhúzás miatt rövid és gyorsan elérhető
    
    //  Elemek kiválasztása
    var elements = document.querySelectorAll(selector);
    
    return elements;
}