'use strict';

//variável
let nomeUsuario =['Gustavo Santana', 'Pedro Luiz','Maria Clara'];
let nomes_alunos =['Gustavo Santana', 'Pedro Luiz','Maria Clara'];
let arrayNome = new Array(10);
let nome ;
let mudar = 0 ;



for( var i = 0 ; i <= 9; i ++){
    nomeUsuario;
    nome = nomeUsuario;
    arrayNome[mudar] = nome;
    mudar = mudar + 1
}
console.log(arrayNome);

for(let i=0; i < nomes_alunos.length; i++){
    var pieces = nomes_alunos[i].split(' ');
    if(pieces.length>=2){
    console;log(pieces[0], pieces[pieces.legth -1 ]);
}else {
    console.log(nomes_alunos[i]);
 }
}