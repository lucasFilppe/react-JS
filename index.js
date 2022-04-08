var nome = ' ';

//se localStorage estiver indefinido pedi o usuario para digitar seu nome
if(typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt("Digite seu nome?");
}

nome = localStorage.nome; //armazena localStorage na variavel nome

document.getElementById('nome').innerHTML = nome;