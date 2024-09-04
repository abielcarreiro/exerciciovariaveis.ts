let preco:number = 10
let valorDesconto:number = 30
function resultado_desconto(){
let precoComDesconto:number = preco - (preco * (valorDesconto / 100))
    return precoComDesconto;

}
console.log(resultado_desconto())