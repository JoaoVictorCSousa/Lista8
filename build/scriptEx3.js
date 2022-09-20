"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var ex3_1 = require("./ex3");
var prompt = PromptSync();
var marca = prompt('Qual é a marca do telefone?');
var modelo = prompt('Qual é o modelo do telefone?');
var lancamento = prompt('Qual o ano de lançamento? ');
var valor = prompt('Por quanto comprou o celular?');
var telefone = new ex3_1.Telefone({
    marca: marca,
    modelo: modelo,
    lancamento: lancamento,
    valor: valor
});
console.log("Marca: ".concat(marca, "\n Modelo: ").concat(modelo, "\n Ano do lan\u00E7amento: ").concat(lancamento, "\n Por quanto comprou? ").concat(valor));
console.log("Seu celular hoje vale ".concat((valor * 0.06) / lancamento));
