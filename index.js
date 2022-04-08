function acao(){
    document.write("Executando.... </br>");
}

acao()

//executa de tempo em tempo
var timer = setInterval(acao, 1000);

//setTimeout(acao, 3000);