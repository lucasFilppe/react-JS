//some
let nomes = ['Mathus', 'Lucas', 'Felipe'];
console.log(nomes.some(nome => nome === 'Lucas'));

//every
let nomes1 = [
                {nome: 'Mathus',idade: 18},
                {nome: 'Lucas',idade: 15},];
console.log(nomes1.every(nome => nome.idade >= 18));

