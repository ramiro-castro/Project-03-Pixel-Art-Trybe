const escolhas = document.getElementById('color-palette');
const quadro = document.getElementById('pixel-board');
let corSelecionada;

function colorPalette(cor) { // cria o botao e coloca uma das cores nele
  const setor = document.createElement('div');
  if (cor === 'black') {
    // alert('black');
    setor.className = 'color selected';
    corSelecionada = 'black'; // a primeira cor selecionada eh a preta
  } else {
    setor.className = 'color';
  }
  setor.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
  setor.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
  escolhas.appendChild(setor);// cria os varios botoes de acordo com a quantidade de cores do array

}

colorPalette('black');

function generateColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return colorPalette(color);
}

// https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
for (let index = 0; index < 3; index += 1) {
  generateColor();
}

function criaQuadro(cor) {
  // alert("teste");
  const pixel = document.createElement('div');
  pixel.className = 'pixel';// cria o botao e coloca uma das cores nele
  pixel.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
  pixel.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
  quadro.appendChild(pixel);
}

for (let index2 = 0; index2 < 25; index2 += 1) {
  criaQuadro('white');
}

escolhas.addEventListener('click', (e) => { // seleciona a cor da paleta
  // alert(click);
  // const children = escolhas.children;
  // https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/
  const { children } = escolhas;
  // alert(children.length);
  for (let index = 0; index < children.length; index += 1) {
    // alert(children[index]);
    if (children[index] !== e.target) {
      children[index].className = 'color';
    } else {
      children[index].className = 'color selected';

      corSelecionada = children[index].style.backgroundColor;
    }
  }
});

quadro.addEventListener('click', (e) => {
  // pinta a div selecionada
  // alert("teste");
  e.target.style.backgroundColor = corSelecionada;// adiciona a cor selecionada ao quadro cliclado no pixel-board
});

const btn = document.querySelector('#clear-board');

btn.addEventListener('click', () => {
  window.location.reload();
});
