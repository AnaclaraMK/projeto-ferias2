const botaoFixo = document.getElementById("btnFixoContato");


botaoFixo.addEventListener("click", () => {
    window.location.hash = "#";
});
window.addEventListener("DOMContentLoaded", () => {
    
   
    const alerta = document.getElementById("alerta-boas-vindas");

    setTimeout(() => {
        alerta.classList.add("mostrar-alerta");
    }, 1000);

    setTimeout(() => {
        alerta.classList.remove("mostrar-alerta");
    }, 5000);
    
});
const btnTema = document.getElementById("btn-tema");
const corpoPagina = document.body;

if (localStorage.getItem("tema") === "dark") {
    corpoPagina.classList.add("dark-mode");
    btnTema.innerHTML = "&#9789;"; 
}

btnTema.addEventListener("click", () => {
    corpoPagina.classList.toggle("dark-mode");

    if (corpoPagina.classList.contains("dark-mode")) {
        btnTema.innerHTML = "&#9789;"; 
        localStorage.setItem("tema", "dark");
    } else {
        btnTema.innerHTML = "&#9788;";
        localStorage.setItem("tema", "light");
    }
});
