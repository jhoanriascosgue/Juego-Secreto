
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
numeromaximo = 10;
/**
 decalracion de funciones 
 */ 


function texto(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function verificar(){
    let numerouser = parseInt(document.getElementById("valor").value); 
    if(numerouser === numeroSecreto){
        texto("p",`ganaste en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);  
        document.getElementById("reiniciar").removeAttribute("disabled");      
    } else{
        // no se cumple la condicion no acerto el numero secreto
        if(numerouser > numeroSecreto){
            texto("p","el numero secreto es menor");
        } else{
            texto("p","el numero secreto es mayor");
        }
        intentos++;
        limpiar();
    }
    
    return;
}

function limpiar (){
 document.querySelector("#valor").value = "";
   
    return;
}

 function numeroRandom(){
    let numeroGenerado = Math.floor(Math.random() *numeromaximo) + 1;
    if(listaNumerosSorteados.length == numeromaximo){
        
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return numeroRandom();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
}


function condicionjuegos(){
    texto("h1","juego del numero secreto");
    texto("p","indica  un numero de 1 al "+numeromaximo);
    numeroSecreto = numeroRandom();
    intentos = 1;
    return;
}
function reiniciarJuego (){
    limpiar();
    condicionjuegos();
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    return;
}

condicionjuegos();