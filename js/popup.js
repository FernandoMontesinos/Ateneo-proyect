const textoBonos = document.querySelector(".textBonos");
const informacion = document.querySelector(".informacion");


textoBonos.addEventListener("click", () => {
    const ventanaModal = document.querySelector(".ventanaModal");
    ventanaModal.classList.add("active");

    const btnCerrarpopup = document.querySelector(".btn-cerrar-popup");
    btnCerrarpopup.addEventListener("click", () => {
        ventanaModal.classList.remove("active");
    })
});




