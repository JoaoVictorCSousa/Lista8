"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
var Telefone = /** @class */ (function () {
    function Telefone(_a) {
        var marca = _a.marca, modelo = _a.modelo, lancamento = _a.lancamento, valor = _a.valor;
        this.marca = marca;
        this.modelo = modelo;
        this.lancamento = lancamento;
        this.valor = valor;
    }
    return Telefone;
}());
exports.Telefone = Telefone;
