function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'programador',
        status: 1,
        codigo: '123456'
};

return novosDados;

}

console.log(cadastroPessoa({nome: 'Lucas', sobrenome: 'Filipe', anoInicio: 2022}))