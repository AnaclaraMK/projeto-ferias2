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
// 1. Dicionário contendo os textos em Português e Francês
const traducoes = {
    pt: {
        "menu-home": "Home",
        "menu-sobre": "Sobre",
        "menu-servicos": "Serviços",
        "hero-titulo": "Explore o país mais chique do mundo!",
        "hero-subtitulo": "Referência mundial na moda, culinária e paisagens. O que está perdendo?!",
        "hero-botao": "Conhecer Mais"
    },
    fr: {
        "menu-home": "Accueil",
        "menu-sobre": "À Propos",
        "menu-servicos": "Services",
        "hero-titulo": "Explorez le pays le plus chic du monde !",
        "hero-subtitulo": "Référence mondiale de la mode, de la gastronomie et dos paysages. Qu'attendez-vous ?!",
        "hero-botao": "En Savoir Plus"
    }
};
const btnIdioma = document.getElementById("btn-idioma");

function traduzirPagina(idioma) {
    const elementos = document.querySelectorAll("[data-translate]");
    
    elementos.forEach(elemento => {
        const chave = elemento.getAttribute("data-translate");
        if (traducoes[idioma] && traducoes[idioma][chave]) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });

    btnIdioma.textContent = idioma === "pt" ? "FR" : "PT";
    localStorage.setItem("idioma", idioma);
}

const idiomaSalvo = localStorage.getItem("idioma") || "pt";
traduzirPagina(idiomaSalvo);

btnIdioma.addEventListener("click", () => {
    const idiomaAtual = localStorage.getItem("idioma") || "pt";
    const novoIdioma = idiomaAtual === "pt" ? "fr" : "pt";
    traduzirPagina(novoIdioma);
});
