'use strict';//toda variavel deve ser declarada. Sem o use não permite que use a varivel sem ser declarada
//Esse são os primeiros
//comandos de javascript

/*
Abaixo teremos as declarações de variáveis
const
left
var
*/
// na declaração de variaveis em javascript usando var é possivel
//redeclarar uma variavel
var nome = 'Ramon de Holanda';
var nome = 'Senai';

console.log(nome);

let curso = 'DDS';
// let curso = 'banco de dados'; o uso do let impede a redeclaração de variaveis

let nota1 = 5;
//nota = 10; no java podemos usar variveis sem precisar declarar

console.log(nota1);

//tipos de variaveis do javascript
let texto ='aula de JavaScript'
console.log(texto);
let decimal = 20.8;
console.log(decimal);
let booleano  = true;
console.log(booleano)

let n1 = '10';
let n3 = 's10s'
let n2 = 5;
console.log(n1+n2); // foi feito uma cocatenacao de uma palavra com um numero

n1 = parseInt(n1); // No javaScript é possivel fazer o reuso de variaveis inclusive 
console.log(n3+n1);


let dia = 'segunda';
let saudacao ='boa noite';

console.log(dia+saudacao);// sem espaço
console.log(dia,saudacao); // com espaço