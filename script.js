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
.btn-idioma-toggle {
    background: transparent;
    color: #c5a059;
    border: 1px solid rgba(197, 160, 89, 0.4);
    padding: 5px 10px;
    font-family: 'Georgia', serif;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;
    transition: all 0.3s ease;
}

.btn-idioma-toggle:hover {
    background-color: #c5a059;
    color: #1e1e24;
}
