const botonIrArriba = document.getElementById("boton-ir-arriba");

botonIrArriba.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        botonIrArriba.style.display = "block";
    } else {
        botonIrArriba.style.display = "none";
    }
});

botonIrArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});