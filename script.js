var cores = ["red", "blue", "yellow"];
var contPixel = 0;

var visualizar = document.getElementById('visualizar');
var escolhas = document.getElementById('color-palette');
var quadro = document.getElementById('pixel-board');

colorPalette ("black");
//https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
for(let index = 0; index < 3; index += 1){
	generateColor();
}

function generateColor() {
	
		
		//alert("teste");
	
		const letters = '0123456789ABCDEF';
		let color = '#';
		
		for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		}
		
		return colorPalette (color);
	
	
}
  //console.log(generateColor()) // #8432EA

function colorPalette(cor) {// um tipo de for mais rebuscado que ainda nao domino bem

	var setor = document.createElement('div');
	if(cor == 'black'){
	 	//alert('black');
	 	setor.className = 'color selected';// cria o botao e coloca uma das cores nele
	}else{
		setor.className = 'color';
	}
	setor.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
	//button.type = 'button';// define que a div buton será do tipo botão
	setor.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
	escolhas.appendChild(setor);// cria os varios botoes de acordo com a quantidade de cores do array
		
}

for(let index2 = 0; index2 < 25; index2 += 1){
	criaQuadro ("white");
	//contPixel+=1;
	//alert("teste");
}

function criaQuadro(cor) {// um tipo de for mais rebuscado que ainda nao domino bem
	//alert("teste");

	var pixel = document.createElement('div');
	pixel.className = 'pixel';// cria o botao e coloca uma das cores nele
	pixel.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
	//parte.type = 'button';// define que a div buton será do tipo botão
	pixel.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
	quadro.appendChild(pixel);// cria os varios botoes de acordo com a quantidade de cores do array
	//button.addEventListener('click', handler(button));// cria o evento de escutar o clique na cor pretendida
	//firstBlack();
}

// escolhas[0].className = 'selected';

// 	//alert(click);
//   let filhos = escolhas.parentElement.childNodes;// target retorna o nó de elementos que foi clicado
//   //alert(filhos);
//   for(let index = 0; index<filhos.length; index+=1){
// 		console.log(filhos);
// 		if(filhos[index].backgroundColor = 'black'){
// 			filhos[index].className = 'selected';
// 		}else{
//     		filhos[index].className = 'color';
// 		}
// 	}

// colorPalette ("black");
// for(let index = 0; index < cores.length; index += 1){
// 	colorPalette (cores[index]);
// 	//alert("teste");
// }

// function colorPalette(cor) {// um tipo de for mais rebuscado que ainda nao domino bem

// 	var setor = document.childNodes;
// 	if(cor == 'black'){
// 	 	//alert('black');
// 	 	setor.className = 'selected';// cria o botao e coloca uma das cores nele
// 	}else{
// 		setor.className = 'color';
// 	}
// 	setor.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
// 	//button.type = 'button';// define que a div buton será do tipo botão
// 	setor.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
// 	//escolhas.childNodes(setor);// cria os varios botoes de acordo com a quantidade de cores do array
		
// }


// function selectBlack(){
// 	//location.reload();
// 	colorPalette ("black");
// 	for(let index = 0; index < cores.length; index += 1){
// 		colorPalette (cores[index]);
// 		//alert("teste");
// 	}

// 	function colorPalette(cor) {// um tipo de for mais rebuscado que ainda nao domino bem

// 		var setor = document.createElement('div');
// 		if(cor == 'black'){
// 		 	//alert('black');
// 		  	setor.className = 'selected';// cria o botao e coloca uma das cores nele
// 		}else{
// 			setor.className = 'color';
// 		}
// 		setor.value = cor;// define que o valor de determinado botao será o da cor dele cor, algo a ser passado para a função que escuta o click
// 		//button.type = 'button';// define que a div buton será do tipo botão
// 		setor.style.backgroundColor = cor;// cria o botao e coloca uma das cores nele
// 		escolhas.appendChild(setor);// cria os varios botoes de acordo com a quantidade de cores do array
			
// 	}
// }

// window.onload = selectBlack;

escolhas.addEventListener('click', function(e){//seleciona a cor da paleta
	//alert(click);
  let filhos = e.target.parentElement.childNodes;// target retorna o nó de elementos que foi clicado
  //alert(filhos.length);
  for(let index = 0; index<filhos.length; index+=1){
		//alert(filhos[index]);
    	filhos[index].className = 'color';
  }
  e.target.className = 'color selected';
});


document.querySelector('#pixel-board').addEventListener('click', function(e){
	// pinta a div selecionada
 // alert("teste");
  let corSelecionada = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  
  e.target.style.backgroundColor = corSelecionada;
  
});


var btn = document.querySelector("#clear-board");

btn.addEventListener("click", function() {
    
    location.reload();

});

window.onload

