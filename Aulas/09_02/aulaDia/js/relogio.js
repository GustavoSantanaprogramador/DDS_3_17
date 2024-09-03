'use strict';

//Criando função para atualziar o relogio
function atualizaRelogio(){
    //atribuindo a uma variavel o elemento com id relogio
    const relogio = document.getElementById('relogio') ;
    //obtendo data-horade agora
    const agora = new Date();
    //obtendo hora, minutos e segundos da hora atual
    console.log(agora);
    const horasMinutosSegundos = agora.toLocaleDateString('pt-br', {hour: '2-digit', minut:'2-digit' , second: '2-digit'});
    //adicionando a pagina o relogio
    relogio.inerHTML =  horasMinutosSegundos;
    //aplicando recursividade de 1 segundo para o relogio atualziando para cada 1000 milisegundo
    setTimeout(atualizaRelogio,1000);
}