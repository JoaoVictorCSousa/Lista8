interface NewAviao{
    modelo:string;
    ano: number;
    empresa: string;
    capacidade: number;
    valor: number;
}

class Aviao{
    private modelo: string;
    private ano: number;
    private empresa:string;
    private capacidade:number;
    private valor: number;

    constructor({modelo, ano, empresa, capacidade}: NewAviao){
        this.modelo = modelo
        this.ano = ano
        this.empresa = empresa
        this.capacidade = capacidade

    }
    


}
export {Aviao};