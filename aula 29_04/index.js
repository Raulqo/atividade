//atividade 1
/*function imprimirOlaMundo(){
    console.log("Olá Mundo!!!")
}
imprimirOlaMundo()*/

//atividade 2
/*function imprimirNome(nome){
    alert (`Olá ${nome}`)
}
let nomeUser = " "
nomeUser = prompt ("digite o seu nome:")
imprimirNome(nomeUser)
nomeUser = prompt ("digite o seu nome:")
imprimirNome(nomeUser)
nomeUser = prompt ("digite o seu nome:")
imprimirNome(nomeUser)*/
//atividade 3
/*function somaNum (num1 , num2) {
    let soma = num1 + num2
    return soma
}
let numero1 = 3
let numero2 = 12
let resultado = 0 
resultado = somaNum(numero1, numero2)
alert(resultado)*/

//atividade 4 
/*function trataArray (NewArray){
    //inicializa variaveis
    let array = []
let tamanho = array.length
//armazena primeiro valor dividido por 2
array.push((NewArray[0]/2))
array.push((NewArray[(tamanho-1)]/2))
//retorna a arrray nova
return array
}
//declara variaveis
let array = [2,3,4,5,6,7,8]
let novaArray = []
//chama função
novaArray = trataArray(array)
//escreve com alert
alert (novaArray) */

/*let nome = prompt("Digite o seu nome")
let idade = prompt ("Digite a sua idade:")
let cidade = prompt ("Digite a sua cidade:")
let profissão = prompt ("Digite a sua profissão:")

console.log(`Você se chama ${nome} tem ${idade} anos de idade, mora em ${cidade} e é ${profissão}`)*/

/*function TrocarParametros(){
    let mensagem = "Me chamo Caio tenho 23 anos, moro em São Paulo e sou estudante"
    alert(mensagem)
    alert(mensagem.replace("Caio", "Raul").replace("23", "15").replace("São Paulo", "São Leopoldo").replace("estudante", "estudante"))

}
TrocarParametros()*/
function parametros(nome,idade,cidade,profissao){
    console.log(`Sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

}
let nome = prompt("Digite o seu nome")
let idade = prompt ("Digite a sua idade:")
let cidade = prompt ("Digite a sua cidade:")
let profissao = prompt ("Digite a sua profissão:")
parametros(nome,idade,cidade,profissao)



