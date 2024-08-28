'use strict';

//declarações de variáveis
let primeiroArray = new Array(5); // declarando primeiro array
primeiroArray[0] = 5;
primeiroArray[1] = true;
primeiroArray[2] = 'maçã';

//para acessar uma posição do arrays podemos passar a pisição entr[]
//por padrão o arrays  iniciar na posição 0
console.log(primeiroArray);

let segundoArray = []; // Criando um array vazio
segundoArray[10] = 8;//podemos atribuir a uma nova posição no array vazio
console.log(segundoArray);

let tercerioArray =[5,true,8,'pessoa'];//criando arrays já preenchidoa
console.log(tercerioArray);

let quartoArray = new Array(1,true,5,8,'animal');
console.log(quartoArray);

let matriz = [[0,1],[0,2],[true,false]];

console.log(matriz[0]);
console.log(matriz[2][1]);

let cores = ['amarelo','azul', 'branco'];

console.log(cores.toString()); //metodo toString converte para string separada por virgulas
console.log(cores.join('|')); //metodo  que permite converter o arrays para string e permite escolher o separador
console.log(cores.concat(matriz,quartoArray)); //metodo concat permite a junção de arrays
cores.push('preto','verde');//o metodo push envia novas posição
console.log(cores);

console.log(cores.pop());//pop remove e retorna a ultima posição de um array

let primeiraCor = cores.shift(); //shift remove e retorna a primeira posição de um array
console.log(primeiraCor);
console.log(cores);

cores.unshift('roxo','turqueza','marrom');
console.log(cores);// o metodo unshift envia novas posições para o começo do array

let fatia = cores.splice(1,1);//o metodo aplixe remove e retorna um pedaço do array

console.log(cores);
console.log(fatias);

let nome = 'joão de Souza Barboza'; // uma string é um array
console.log(nome[nome.length-1]);//lenght é tamanho

let arrayNome = nome.split(' ');;
console.log(arrayNome);
let primeroUltimo = arrayNome[0] + arrayNome[arrayNome.length-1];
let alternativo = arrayNome.shift() + ' ' + arrayNome.pop();

console.log(primeroUltimo);
console.log(alternativo);