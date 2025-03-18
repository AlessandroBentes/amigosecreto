//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSecretos = [];
let listaDeAmigosSorteados = [];
let resultado = document.getElementById('resultado');
let listaDeAmigosNaTela = document.getElementById("listaAmigos");
document.getElementById("botaosortear").setAttribute('disabled','true');

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

//Habilitar Botao Sotear somente apos haver mais de 2 amigos na lista
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
     
     listaDeAmigosNaTela.innerHTML = "";

     for(let i = 0; i < lista.length; i++)
     {
        let item = document.createElement(tag);
        item.textContent = `${i+1}o Amigo -> ${lista[i]}`;
        listaDeAmigosNaTela.appendChild(item);
     }

}

function limparAmigos()
{
   listaDeAmigosSecretos = [];
   listaDeAmigosSecretos.length = 0;
   listaDeAmigosSorteados = [];
   listaDeAmigosSorteados.length = 0;
   listaDeAmigosNaTela.innerHTML = "";
   listaDeAmigosNaTela.length = 0;
   resultado.innerHTML = "";
   document.getElementById("botaosortear").setAttribute('disabled','false');
}

function sortearAmigo()
{
   let amigoSorteado = listaDeAmigosSecretos[Math.floor(Math.random()* listaDeAmigosSecretos.length)];
      
   if (listaDeAmigosSorteados.length == listaDeAmigosSecretos.length) 
      {
        resultado.innerHTML = `Todos os amigos secretos foram sorteados!!!`;
      } else { if (listaDeAmigosSorteados.includes(amigoSorteado))
                 {
                   sortearAmigo();
                   //resultado.innerHTML = `O amigo(a) ${amigoSorteado} já foi sorteado(a)!!!  Favor sortear novamente!!!`;
                   //return;
                 } else {
                          listaDeAmigosSorteados.push(amigoSorteado);
                          resultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
                          //console.log(`Amigo Sorteado ${listaDeAmigosSorteados.length} -> ${listaDeAmigosSorteados[listaDeAmigosSorteados.length-1]}`);
                        }
             }
}


