import PromptSync = require ('prompt-sync');
import {Aviao} from "./ex2";

const prompt = PromptSync();

const modelo = prompt('Digite o modelo do avião: ');
const ano = prompt(' Digite o ano em que ele foi lançado: ');
const empresa = prompt('Digite a empresa que construiu: ');
const capacidade = prompt('Digite a capacidade: ');
const valor = prompt('Digite o valor que quer vender: ');

    const aviao = new Aviao({
        modelo, ano, empresa, capacidade, valor
    });

    console.log(`Modelo do avião: ${modelo}\n Ano de construção: ${ano}\n Empresa que construiu: ${empresa}\n
    Capacidade atual: ${capacidade}\n Valor que quer vender: ${valor}`)
    console.log(`Você venderá por ${valor}`)