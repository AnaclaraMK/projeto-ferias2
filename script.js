const botaoTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () -> {
    if (window.scrollY > 300) {
        botaoTopo.classList.add("mostrar");    
    } else {
        botaoTopo.classList.remove("mostrar"); 
    }
});

