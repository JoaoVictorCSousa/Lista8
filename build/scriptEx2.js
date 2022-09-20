"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var ex2_1 = require("./ex2");
var prompt = PromptSync();
var modelo = prompt('Digite o modelo do avião: ');
var ano = prompt(' Digite o ano em que ele foi lançado: ');
var empresa = prompt('Digite a empresa que construiu: ');
var capacidade = prompt('Digite a capacidade: ');
var valor = prompt('Digite o valor que quer vender: ');
var aviao = new ex2_1.Aviao({
    modelo: modelo,
    ano: ano,
    empresa: empresa,
    capacidade: capacidade,
    valor: valor
});
console.log("Modelo do avi\u00E3o: ".concat(modelo, "\n Ano de constru\u00E7\u00E3o: ").concat(ano, "\n Empresa que construiu: ").concat(empresa, "\n\n    Capacidade atual: ").concat(capacidade, "\n Valor que quer vender: ").concat(valor));
console.log("Voc\u00EA vender\u00E1 por ".concat(valor));
