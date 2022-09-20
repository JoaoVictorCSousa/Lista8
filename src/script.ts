import PromptSync = require('prompt-sync');
import {Cliente} from "./cadastro";

const prompt = PromptSync();

const nome = prompt('Digite seu nome: ');
const idade = prompt('Digite sua idade: ');
const dataNascimento = prompt('Digite sua data de nascimento: ');
const dinheiroDeposito = prompt('Digite o tanto de dinheiro que quer depositar: ')

const cliente = new Cliente({
    nome, idade, dataNascimento, dinheiroDeposito
});

console.log(`${nome}\n ${idade}^\n${dataNascimento}\n Quantia depositada: R$${dinheiroDeposito} `)






