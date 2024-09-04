let quantidadePessoas:number  = 40
let quantidadeJogadoresTime:number = 4

function sobraJogadores(){
let jogadoresFora:number = quantidadePessoas % quantidadeJogadoresTime
return jogadoresFora

}
console.log(sobraJogadores())