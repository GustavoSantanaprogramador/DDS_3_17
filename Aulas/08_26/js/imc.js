peso = prompt('Digite o seu peso: ');
peso = parseFloat(peso);
console.log(peso);

altura = prompt('Digite sua altura: '); // usuário irá inserir os dados
altura = parseFloat(altura); 
console.log(altura);

imc = peso / (altura * altura);

console.log(imc);

if (imc < 16.9){
    console.log("muito abaixo  do peso")
}else if (imc < 18.4){
    console.log("abaixo do peso")
}else if(imc < 24.9){
    console.log('peso normal')
}else if (imc < 29.9){
    console.log('acima do peso')
}else if (imc < 34.9){
    console.log('obesidade grau I')
}else if (imc < 40){
    console.lof('obesidade grau II')
}else{
    console.log('OBESIDADE GRUA III')
}