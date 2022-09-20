"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(_a) {
        var modelo = _a.modelo, ano = _a.ano, empresa = _a.empresa, capacidade = _a.capacidade;
        this.modelo = modelo;
        this.ano = ano;
        this.empresa = empresa;
        this.capacidade = capacidade;
    }
    return Aviao;
}());
exports.Aviao = Aviao;
