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
const minhaPlaylist = [
    {
        titulo: "La Vie En Rose (Instrumental)",
        artista: "Jazz de Paris",
        url: "https://soundhelix.com" 
    },
    {
        titulo: "Chanson d'Automne",
        artista: "Café Accordion",
        url: "https://soundhelix.com"
    },
    {
        titulo: "Sous le Ciel de Paris",
        artista: "Orchestre de Rue",
        url: "https://soundhelix.com"
    }
];

let indiceMusicaAtual = 0;

const tagAudio = document.getElementById("audio-playlist");
const elementoTitulo = document.getElementById("titulo-musica");
const elementoArtista = document.getElementById("artista-musica");
const btnControle = document.getElementById("btn-controle-musica");
const elementoDisco = document.getElementById("disco-vinil");

function carregarMusica(indice) {
    const musica = minhaPlaylist[indice];
    tagAudio.src = musica.url;
    elementoTitulo.textContent = musica.titulo;
    elementoArtista.textContent = musica.artista;
}

carregarMusica(indiceMusicaAtual);

btnControle.addEventListener("click", () => {
    if (tagAudio.paused) {
        tagAudio.play();
        btnControle.innerHTML = "&#9632;"; 
        btnControle.title = "Parar música";
        elementoDisco.classList.add("girando");
    } else {
        tagAudio.pause();
        btnControle.innerHTML = "&#9658;"; 
        btnControle.title = "Tocar música";
        elementoDisco.classList.remove("girando");
    }
});

tagAudio.addEventListener("ended", () => {
    indiceMusicaAtual++;
    
    if (indiceMusicaAtual >= minhaPlaylist.length) {
        indiceMusicaAtual = 0;
    }
    
    carregarMusica(indiceMusicaAtual);
    tagAudio.play(); 
});
