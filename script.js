//Gerando numeros aleatórios

// var x = Math.floor(Math.random() * 51);
// console.log(x)


function resulFinal() {

  var numero = document.getElementById('numeroDigitado').value;


  var calculo = 0;

  var numeros_recebidos = Array();
  var verifica_recebidos = Array();
  
  if (numero > 999999) {
    alert('O numero máximo é 999999');
    document.getElementById('numeroDigitado').value = '';
  }else{

    for (var i = 0; i < 8; i++) {
      calculo = Math.floor(Math.random() * 8);
      numeros_recebidos[i] = calculo;
      verifica_recebidos[i] = numeros_recebidos[i];
    }

    for (var i = 0; i < 8; i++){

      for (var j = 0; j < 8; j++){
        if (numeros_recebidos[i] == verifica_recebidos[j]) {
          numeros_recebidos[i] = Math.floor(Math.random() * numero);
        }
      }
    }

    document.getElementById('resu1').value = numeros_recebidos[0];
    document.getElementById('resu2').value = numeros_recebidos[1];
    document.getElementById('resu3').value = numeros_recebidos[2];
    document.getElementById('resu4').value = numeros_recebidos[3];
    document.getElementById('resu5').value = numeros_recebidos[4];
    document.getElementById('resu6').value = numeros_recebidos[5];
    document.getElementById('resu7').value = numeros_recebidos[6];
    document.getElementById('resu8').value = numeros_recebidos[7];
}

}