const botaoOnOff = document.getElementById ('botaoOnOff');
const imagemId = document.getElementById ('imagemId');

function seLampadaQuebrada () {
    return imagemId.src.indexOf ('quebrado') > -1
}

function lampadaLigada() {
    if (!seLampadaQuebrada ()) {
        imagemId.src ="./imagem/liga.jpg";
    }
}

function lampadaDesligada() {
    if (!seLampadaQuebrada ()) {
        imagemId.src = "./imagem/desliga.jpg";
    }
}

function lampadaQuebrada() {
    imagemId.src = "./imagem/quebrado.jpg";
}

function lampadaOnOff() {
    if (botaoOnOff.textContent == 'Ligar') {
        lampadaLigada ();
            botaoOnOff.textContent = 'Desligar';   
    }else {lampadaDesligada ();
            botaoOnOff.textContent = 'Ligar';
    }
}

botaoOnOff.addEventListener ('click', lampadaOnOff);
imagemId.addEventListener ('click', lampadaQuebrada);

imagemId.addEventListener ('mouseover', lampadaLigada);
imagemId.addEventListener ('mouseleave', lampadaDesligada);

