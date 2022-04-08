//switch

document.write('</br>Escolha seu pedido');
document.write('</br>1 - Sorvete');
document.write('</br>2 - Pizza');
document.write('</br>1 - Agua');

function pedir() {
    x = prompt('O que deseja pedir?');

    switch(x){
        case '1':
            alert("Seu sorvete está sendo preparado");
            break;
        
        case '2':
            alert("Sua pizza está sendo preparada");
            break;
    
        case '3':
            alert("Sua agua esta vindo");
            break;
        
    }
}