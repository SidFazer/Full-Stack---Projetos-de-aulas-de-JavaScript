function calcularMelhorPreco(){

  //validar campos
  let precoAlcool = document.getElementById('alcool').value
  let precoGasolina = document.getElementById('gasolina').value

  if( precoAlcool != "" ){
    if( precoGasolina != "" ){

      /*Calcular se é melhor usar álcool ou gasolina
        * se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
        * senão é melhor utilizar álcool
      */
      let resultado = precoAlcool / precoGasolina
      if( resultado >= 0.7 ){
        //alert("Melhor utilizar gasolina")
        document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina"
      }else{
        //alert("Melhor utilizar alcool")
        document.getElementById('resultado').innerHTML = "Melhor utilizar Álcool"
      }

    }else{
      alert("Preencha o preço da Gasolina")
    }
  }else{
    alert("Preencha o preço do Álcool")
  }

}