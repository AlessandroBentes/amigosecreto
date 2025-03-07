//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSecretos = [];
let numeroLimite = 5;
//let amigoSecreto = SortearAmigoSecreto();
document.getElementById("botaosortear").setAttribute('disabled','false');

function adicionarAmigo() 
{
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) 
      {
        alert(`Informe um nome de Amigo!!!`);
        return;
      } else { 
              if (listaDeAmigosSecretos.includes(nomeAmigo))
                 {
                    alert(`O nome do Amigo já existe na lista!!!`);
                    return;
                 }  else {
                           listaDeAmigosSecretos.push(nomeAmigo);
                           exibirAmigosNaTela('li', listaDeAmigosSecretos);
                         }
             }
    
    //console.log(`Amigo ${listaDeAmigosSecretos.length} -> ${listaDeAmigosSecretos[listaDeAmigosSecretos.length-1]}`);
    limparCampo('amigo');
    habilitarBotao('botaosortear', listaDeAmigosSecretos);
}

function habilitarBotao(tagId, lista)
{
    if (lista.length > 2) 
    {
      document.getElementById(tagId).removeAttribute('disabled');  
    }
}

function limparCampo(tagId) 
{
    let campo = document.getElementById(tagId);
    campo.value = '';
    campo.focus();
}

function exibirAmigosNaTela(tag, lista) 
{
     let listaDeAmigosNaTela = document.getElementById("listaAmigos");
     listaDeAmigosNaTela.innerHTML = "";

     for(let i = 0; i < lista.length; i++)
     {
        let item = document.createElement(tag);
        item.textContent = `${i+1}o Amigo -> ${lista[i]}`;
        listaDeAmigosNaTela.appendChild(item);
     }

}

function sortearAmigo()
{
   let amigoSorteado = listaDeAmigosSecretos[Math.floor(Math.random()* listaDeAmigosSecretos.length)];
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;

}
