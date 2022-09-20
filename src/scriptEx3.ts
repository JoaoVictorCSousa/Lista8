import PromptSync = require ('prompt-sync');
import {Telefone} from "./ex3";

const prompt = PromptSync();

const marca = prompt('Qual é a marca do telefone?');
const modelo = prompt('Qual é o modelo do telefone?');
const lancamento = prompt('Qual o ano de lançamento? ');
const valor = prompt('Por quanto comprou o celular?')

const telefone = new Telefone({
    marca, modelo, lancamento, valor
});

console.log(`Marca: ${marca}\n Modelo: ${modelo}\n Ano do lançamento: ${lancamento}\n Por quanto comprou? ${valor}`)
console.log(`Seu celular hoje vale ${(valor*0.06)/lancamento}`)