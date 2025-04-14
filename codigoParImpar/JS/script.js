
function pegarValor() {
    let valor = parseInt(document.getElementById("valor").value)

    if(isNaN(valor) || valor <= 0){
        alert("Digite um número positivo por favor!  😒👎");
        document.getElementById("valor").value = "";
    }else if(valor % 2 === 0){
        alert(`O númeor ${valor} é Par! 😎💖`);
        document.getElementById("valor").value = "";
    }else{
        alert(`O númeor ${valor} é Impar! 😎💖`);
        document.getElementById("valor").value = "";
    }
}