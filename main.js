//Definindo a variável de saída e chamando a função saldo para ser executada.
let saida = saldo(100, 9)

//Aplicando as variáveis para a estrutura de decisão escolher o nível de classificação de acordo com o resultado da função saldo.
let xp = saida
let nivel
if (xp < 10){
    nivel = "Ferro"
} else if (xp <= 20){
    nivel = "Bronze"
} else if (xp <= 50){
    nivel = "prata"
} else if (xp <= 80){
    nivel = "Ouro"
} else if (xp <= 90){
    nivel = "Diamante"
} else if (xp <= 100){
    nivel = "Lendário"
} else if (xp >= 101){
    nivel = "Imortal"
}

//Resultado sendo mostrado
console.log("O heroi tem saldo de " + saida + ", e está no nível de " + nivel)
//Função de saldo com o cálculo da diferença entre vitórias e derrotas.

function saldo(vitoria, derrota){
    let resultado = (vitoria - derrota)
    return resultado
}
