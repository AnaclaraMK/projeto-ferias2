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
