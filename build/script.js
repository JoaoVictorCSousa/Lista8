"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var cadastro_1 = require("./cadastro");
var prompt = PromptSync();
var nome = prompt('Digite seu nome: ');
var idade = prompt('Digite sua idade: ');
var dataNascimento = prompt('Digite sua data de nascimento: ');
var dinheiroDeposito = prompt('Digite o tanto de dinheiro que quer depositar: ');
var cliente = new cadastro_1.Cliente({
    nome: nome,
    idade: idade,
    dataNascimento: dataNascimento,
    dinheiroDeposito: dinheiroDeposito
});
console.log("".concat(nome, "\n ").concat(idade, "^\n").concat(dataNascimento, "\n Quantia depositada: R$").concat(dinheiroDeposito, " "));
