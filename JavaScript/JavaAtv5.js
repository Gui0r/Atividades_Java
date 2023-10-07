let Nota1 = Number(prompt("Digite sua primeira nota: "))
let peso1 = Number(prompt("Qual o peso da primeira nota: "))
NotaA = Nota1 * peso1

let Nota2 = Number(prompt("Digite sua segunda nota: "))
let peso2 = Number(prompt("Qual o peso da segunda nota: "))
NotaB = Nota2 * peso2

let Nota3 = Number(prompt("Digite sua terceira nota: "))
let peso3 = Number(prompt("Qual o peso da terceira nota: "))
NotaC = Nota3 * peso3

let SomaNotas = NotaA + NotaB + NotaC
let SomaPesos = peso1 + peso2 + peso3

let Media = SomaNotas / SomaPesos
alert(Media)

if(Media < 6){
    alert("Você não alcançou a média!")
}else{
    alert("Você alcançou a média!")
}