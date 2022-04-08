function entrar(){

    var area = document.getElementById('area'); // pega o elemento id
    var nome = prompt('Digite seu nome? '); // armazena 

    if (nome == '' || nome == null) {
        alert('Digite seu nome novamente');
        area.innerHTML = 'bem vindo.... ';
    }
    else {
        area.innerHTML = ' bem vindo ' + nome;
    }
}


function entrar2(nome){

    var area = document.getElementById('area2'); // pega o elemento id
    var texto = prompt('Digite seu sobrenome? '); // armazena 

    area.innerHTML = nome + " " + texto;
}