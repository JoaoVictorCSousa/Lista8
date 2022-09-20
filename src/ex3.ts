interface NewTelefone{
    marca:string;
    modelo:string;
    lancamento:number;
    valor: number;

}

class Telefone{
    private marca:string;
    private modelo:string;
    private lancamento:number;
    private valor:number;

    constructor({marca, modelo, lancamento, valor}){
        this.marca = marca
        this.modelo = modelo
        this.lancamento = lancamento
        this.valor = valor 
    }
}

export{Telefone}