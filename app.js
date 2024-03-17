let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
//let numeroSecreto = 7;


exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 10');

}


let tentativas = 1;

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(chute==numeroSecreto);   

    if(chute == numeroSecreto){
        exibirNaTela('h1','Acertou')
        let palavraTentativa = tentativas >1 ? 'tentatvas' : 'tentativa';
        let mensagemTentativas = `Você descobriu a mensagem em ${tentativas} ${palavraTentativa}!`;

        exibirNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
                
        }else{
        if(chute > numeroSecreto){
            exibirNaTela('p','O número secreto é menor');
        }else{
            exibirNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        
    }
}

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 +1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista==4){
        listaDeNumerosSorteados=[];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto =gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}



