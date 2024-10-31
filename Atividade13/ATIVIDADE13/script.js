const janela = document.getElementById("janela");
const titulo = document.getElementById("titulo");

janela.addEventListener("mouseover", () => {
    if(janela.getAttribute("src") !== "janelaquebrada.png"){
        janela.src = "janelaaberta.png";
        titulo.innerText = "Janela Aberta"
    }
});

janela.addEventListener("mouseout",() => {
    if(janela.getAttribute("src") !== "janelaquebrada.png"){
        janela.src = "janelafechada.png";
        titulo.innerText = "Janela Fechada"
    }
});

janela.addEventListener("click", () => {
    janela.src = "janelaquebrada.png";
    titulo.innerText = "Janela Quebrada"
});