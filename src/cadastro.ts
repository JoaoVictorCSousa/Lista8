interface NewCliente {
    nome: string;
    idade: number;
    dataNascimento: number;
    dinheiroDeposito: number;

    
}

class Cliente{
    private nome: string;
    private idade: number;
    private dataNascimento: number;
    private dinheiroDeposito:number;
    


constructor ({nome, idade, dataNascimento, dinheiroDeposito}: NewCliente){
    this.nome = nome;
    this.idade = idade;
    this.dataNascimento = dataNascimento;
    this.dinheiroDeposito = dinheiroDeposito;

}

}






export {Cliente};


