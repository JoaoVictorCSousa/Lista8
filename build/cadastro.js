"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var nome = _a.nome, idade = _a.idade, dataNascimento = _a.dataNascimento, dinheiroDeposito = _a.dinheiroDeposito;
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.dinheiroDeposito = dinheiroDeposito;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
