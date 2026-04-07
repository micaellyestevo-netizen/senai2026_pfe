​
class jogador{//classe mae
    #nome;
    #numero;

    constructor(nome, numero){
        this.#nome= nome;
        this.#numero=numero;

    }
    getNome(){
        return this.#nome;

    }
    getNumero(){
        return this.#numero;
    }
}//classe mae geralmente nao instanciada

class jogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, qntdGols){
        super(nome, numero);
        this.peDominante=peDominante;
        this.totalGols=qntdGols;
    }

    fazerGol(qntd){
        return this.totalGols += qntd;
    }

    mostrar(){
        return `O jogador ${super.getNome()} camisa numero ${super.getNumero()} tem o pé dominante ${this.peDominante} e tem ${this.totalGols} gols`;

    }
    }
    const jorge = new jogadorFutebol('Jorge', 10, 'direito', 10);
    console.log(jorge.mostrar);

    
