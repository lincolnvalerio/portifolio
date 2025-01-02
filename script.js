const titulo = document.getElementById('titulo');
const palavras = ['Desenvolvedor', 'Programador'];
let i = 0;
let j = 0;
let textoAtual = '';

function escrever() {
    if (j < palavras[i].length) {
        textoAtual += palavras[i][j];
        j++;
        titulo.innerText = textoAtual;
        setTimeout(escrever, 150); 
    } else {
        setTimeout(apagar, 1000);
    }
}

function apagar() {
    if (j > 0) {
        textoAtual = textoAtual.slice(0, j - 1);
        j--;
        titulo.innerText = textoAtual;
        setTimeout(apagar, 100); 
    } else {
        i = (i + 1) % palavras.length;
        setTimeout(escrever, 500);
    }
}

escrever();
