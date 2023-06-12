let enlacesHeader = document.querySelectorAll(".enlaces-nav")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#F2F2F2";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#191C32";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos")
})