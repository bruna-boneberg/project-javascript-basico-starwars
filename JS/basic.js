console.log('Olá, Javascript!');

var userName = 'Bruna Costa';

// document.getElementById('user-name').innerHTML = userName; // Relacionando o HTML com o Javascript (nome do usuário através de um código javascript)

// Variáveis // 

//var nome = 'Mestre Yoda';
//var idade = 100;
//var jedi = true; //bolean
// VAR ou LET para a variável

// Javascript, Ruby e Python possuem tipagem dinâmica.
// C# e Java possuem tipagem declarativa.

//console.log(nome);
//console.log(idade);
//console.log(jedi);

// Operadores Matemáticos //

// var n1 = 7;
// var n2 = 2.5;

// console.log(typeof n1);
// console.log(typeof n2);

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// var total = n1 / n2;
// console.log(total);

// Operadores de Comparação //

// var v1 = 5;
// var v2 = '5';

// var resultado = v1 !== v2;
// console.log(resultado);

// Funções // 

//function soma(n1, n2) {
//  console.log(n1 + n2);
//}

// soma(5, 100)

// function boasVindas(nome) {
//     alert(nome + ', Seja bem-vindo(a)!')
// }

// boasVindas('Bruna')

// function soma(n1, n2) {
//     return n1 + n2;
// } // RETURN tem o objetivo de somar e devolver o resultado, mas não imprimir. Para imprimir na tela vai ser necessário criar uma var, invocando a função

// var resultado = soma(5, 5);
// console.log(resultado);

// Controle de fluxos //

// BDD = Desenvolvimento guiado por comportamento

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que não aceitam cartão de débito ou crédito

// var saldo = 1000;
// var ValorLimitePorOperacao = 700;

// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo!');
//     } else if (valor > ValorLimitePorOperacao) {
//         console.log('Valor do saque é superior ao máximo permitido por operação!')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(701);
// console.log(saldo);

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais 
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais 
// Quando eu faço um saque de 1001 reais
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo disponível

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando eu faço um saque no valor de 701 reais 
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alrta informando que o valor é superior ao máximo permitido por operação

// Arrays //

// var gaveteiro  = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[1])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader'];

// personagens.push('C3pO') // coloco mais um atributo
// personagens.pop() // exclui o último
// console.log(personagens)

// personagens.push('R2D2');

// personagens = personagens.filter(function(p) {
//     return p !== 'Darth Vader' // Conseguimos filtrar e escolher qual quero retirar!
// })

// personagens = personagens.filter(function(p) {
//     return p === 'Mestre Yoda' // Conseguimos filtrar e escolher um único elemento para exibir!
// })

// console.log(personagens)

// console.log(personagens)

// Controles de repetição (Loops) //

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader'];

// personagens.forEach(function(p){
//     console.log(p)
// }) // Listando todos os itens do array adequadamente!

// for (var i in personagens) {
//     console.log(personagens[i])
// } // Outra forma de listar todos os itens!

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// } // Código será executado até a condição retornar!

// Objetos (Super Variáveis) //

// var yoda = {
//   nome: "Mestre Yoda",
//   idade: 100,
//   jedi: true,
//   mostraIdade: function() {
//     console.log(`A idade do ${(this.nome)} é ${(this.idade)} anos`)
//   }
// }

// yoda.nome = "Mestre Yoda"
// yoda.idade = 100
// yoda.jedi = true
// yoda.outro_campo = "alguma coisa"

// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)
