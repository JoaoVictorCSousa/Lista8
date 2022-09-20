import PromptSync = require ('prompt-sync');
import {Funcionario} from "./ex4";

const prompt = PromptSync();

const nome = prompt('Qual é o seu nome? ')
const idade = prompt('Quantos anos você tem? ')
const cargo = prompt('Qual é o seu cargo? ')

const funcionario = new Funcionario({
    nome, idade, cargo, 
});

console.log(`Funcionário: ${nome}\n Idade: ${idade}\n Cargo: ${cargo}`)
console.log(`-------SEJA BEM VINDO A MAIS UM DIA DE TRABALHO----------`)

