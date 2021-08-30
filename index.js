const botonOcultar = document.getElementById("botonOcultar");
const input = document.getElementById("inputregistroContraseña");

botonOcultar.addEventListener("click", () => {
    if(input.type === "password"){
        input.type = "text";
        botonOcultar.style.opacity = 0.9;
    } else{
        input.type = "password";
        botonOcultar.style.opacity = 0.5;
    }
})