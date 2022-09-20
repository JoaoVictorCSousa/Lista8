interface newFuncionario{
    nome:string;
    idade:number;
    cargo:string;
    humor:boolean;

}

class Funcionario{
    private nome:string;
    private idade:number;
    private cargo:string;

    constructor({nome,idade,cargo,}){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
         
    }
    

}

export{Funcionario}