"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var ex4_1 = require("./ex4");
var prompt = PromptSync();
var nome = prompt('Qual é o seu nome? ');
var idade = prompt('Quantos anos você tem? ');
var cargo = prompt('Qual é o seu cargo? ');
var funcionario = new ex4_1.Funcionario({
    nome: nome,
    idade: idade,
    cargo: cargo,
});
console.log("Funcion\u00E1rio: ".concat(nome, "\n Idade: ").concat(idade, "\n Cargo: ").concat(cargo));
console.log("-------SEJA BEM VINDO A MAIS UM DIA DE TRABALHO----------");
