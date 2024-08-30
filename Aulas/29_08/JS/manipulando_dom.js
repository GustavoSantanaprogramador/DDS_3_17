'use strict';

let html = document.getElementById('saudacao');

console.log('html');
//DOM (Document Obejtc Model) é a estrutura da pagina do HTML.
//o DOM permite que linguagens interajam com a página

html.innerHTML='<h1>Olá mundo<h1>';

let alunos = [{nome: 'Gustavo', sobrenome: 'Dias Santana'},
              {nome: 'Lucas', sobrenome: 'Medina'}
]

let tabala = document.getElementById('tabela');

 let exibir = '';
for ( let aluno of alunos){
    exibir += '<tr>'
    exibir += '<td>'+aluno.nome+'</td>'
    exibir += '<td>'+aluno.sobrenome+'</td>'
    exibir += '<tr>'
}

tabela.innerHTML += exibir;

console.log(tabela);