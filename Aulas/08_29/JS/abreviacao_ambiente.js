'use strict';

let ambientes = [
    'VITRIA-3-SALA-3004',
    'VITRIA5-LAB-5100',
    'VITRIA-5-LAB-5111'
];

let pieces = ambientes[0].split('-');
pieces.splice(0,2);
let ambiente = pieces.join('-');
console.log(ambiente);