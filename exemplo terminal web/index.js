//recebeu variaveis
let nome = prompt ("digite seu nome:")
let idade = prompt ("digite sua idade")
//mensagem: 12 horas
let horastrabalho = prompt ("Digite horas que trabalha por dia:")
let salariodia = prompt ("Digite o seu salario diario:")
//verificando variaveis
console.log(typeof nome)
console.log(typeof horastrabalho)
console.log(typeof salariodia)
//convertendo o que é necessario
let horastrabnumber = Number(horastrabalho)
let saldianumber = Number(salariodia)
//Processando valores
let valhoranumber = horastrabnumber/saldianumber
//conversão para não dar erro de NULL
let valorhora = String(valhoranumber)
const mensagem = "Seu valor hora e "+ valorhora + "!!!"
//Verificando variáveis
console.log(typeof valorhora)
console.log(typeof mensagem)
console.log(mensagem)
//Saída de valores para Front End
alert(mensagem)