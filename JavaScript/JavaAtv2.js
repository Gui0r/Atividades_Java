//Formula IMC = peso / (altura * 2)

//Pergunte seus kilos
let Kg = Number(prompt("Digite seu peso em Kg: "))

//pergunta sua altura
let Alt = Number(prompt("Digite sua altura em metros: "))

let Imc

Alt = Alt*2

Imc = Kg / Alt

//Mostra quantos kilos você tem
alert(`${Kg}`)

//Mostra seu Imc
alert(`${Imc}`)

if(Imc <= 18.5){
    alert("Você esta abaixo do peso (desnutrido)")
}
else if(Imc >= 18.6 && Imc <= 24.9){
    alert("Você esta no peso ideal")
}
else if(Imc >= 30.0 && Imc <= 34.9){
    alert("Você esta acima do peso! (vai meter uma academia)")
}

