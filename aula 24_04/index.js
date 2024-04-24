//declara variaveis
/*let i = 0
let soma = 0
//inicializa I
i = Number(prompt("digite um numero para ser somado: (Para sair digite 0!)"))
while (i != 0) {
    //soma valores
    soma = soma + i
    //Lê valores para somar
    i = Number(prompt("Digite um numero para ser somado: (Para sair digite 0)"))
}
//mostra valores somados na tela após sair do loop
alert(soma)*/

const numeros = Number ["11" ,"15", "18", "14", "12", "10"]
let maiorValor = 0

for (let i = 0; i > 6; i++){
    if (Array[i] > maiorValor){
        maiorValor = Array[i]
    }
}
alert(maiorValor) 