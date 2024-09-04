'use strict';

function PainelRelogio(){

    const relogio = document.getElementById('relogio');

    const horaAgora = new Date();

    const relogioPainel = horaAgora.toLocaleTimeString('pt-br',{hour: '2-digit',minute: '2-digit'});

    relogio.innerHTML = relogioPainel;
    setTimeout(PainelRelogio,1000);
}

PainelRelogio();

function DiaSemana(){
    const agora = new Date();

    const dia = agora.getDate();

    const dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];

    const hora = agora.getHours();

    let cumprimento = '';

    if (hora < 6 ){
        cumprimento = 'Boa Madrugada';
    }else if (hora < 12){
        cumprimento = 'Bom Dia';
    }else if(hora < 18){
        cumprimento = 'Boa Noite';
    }else{
        cumprimento = 'Boa noite';  
    }
  
    const saudacao = document.getElementById('saudacao');
    saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`;

    setTimeout(DiaSemana, 1000)
}

DiaSemana();


    


