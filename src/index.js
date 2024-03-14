///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1-O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
// Resp.: vai dar erro porque const não pode ser reatribuida e idade ja foi declarada
const idade = 25;
console.log(idade); 

////////////////////////////////////////////////////////////////////////


//2-O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo
//Resp.: O X dentro escopo o resultado e 10 e fora do escopo da erro de x não definido

{
    let x = 10;
   console.log(x); 
}
 console.log(x);

///////////////////////////////////////////////////////////////////////

//3-Ainda sobre escopo explique a diferença dos console.log
/*Resp.:no console.log(x) ele da erro pois da como variavel nao definida e o execução e interropida
        no console log(y) a variavel y e var, e var e global nao depende do escopo
*/

{
    let x = 10;
    var y = 20;
console.log(x);
 console.log(y);
}

 ///////////////////////////////////////////////////////////////////////

//4-O que acontece nessa declaração, explique sobre o Hoisting
/*Resp.: no console.log(a) ele funciona pois ocorre o hoiting da variavel para topo
        no console.log(b) ele ocorre erro pois a variavel b ainda não foi inicializada
*/

console.log(a); 
var a = 5;
console.log(b);
let b = 10;


/////////////////////////////////////////////////////////////////////////////////

//5-No código abaixo apresenta um erro, qual?
/* Resp.: na variavel x o resultado e 10, não há erro poquer o x é var ele permite redeclaração
        na variavel y da erro porque é uma variavel let que não permite redeclaração
            */
var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20; 
// console.log(y); 


////6- Escreva um programa que print a primeira letra dessa variavel 

let nomeCompleto = 'eduardo';
const letraInicial=nomeCompleto.charAt(0);
console.log(letraInicial);

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)









