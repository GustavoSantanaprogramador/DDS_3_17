'use stritc';

//criando funcao para atualziar saudacao
function atualizacao(){
//obtendo data de agora 
const agora = new Date();
//
console.log(agora.getDay());
//obtendo o número da semana iniciando de 0 indo até 6
const dia = agora.getDay();
//criando Array de dias da semana equivalente
const dias = ['Domingo', 'Segunda-Feira', 'Terça-feita', 'Quarta-feira','Quinta-feita']
console.log(dias[dia]);
// obtendo horas em valor inteiro
const hora  = agora.getHours();
//declarando variavel de cumprimento
let cumprimento  = '';
//varificando a saudacao adequada
if (hora < 6){
    cumprimento = 'Boa Madrugada';
}else if(hora < 12){
    cumprimento = 'Bom dia';
}else if(hora < 18){
    cumprimento = 'Boa Tarde';
}else{
    cumprimento = 'Boa noite';
}
//selecioandn elemtento
const saudacao = document.getElementById('saudacao');
//adicionando no documento html
saudacao.innerHTML = '${dias[dia]} - ${cumprimento}';
//chamando funcao de forma recursiva
setTimeout(atualizaSaudacao, 1000);
}
atualizacaoSaudacao();