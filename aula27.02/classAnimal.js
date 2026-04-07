class animal{
    especie;
    #genero;
    #qtndIndividuos;
    #nome;

    constructor(especie, genero, qtde, nome){
    this.especie= especie;
    this.#genero=genero;
    this.#qtndIndividuos=qtde;
    this.#nome=nome;
    }
}

const panda = new animal('urso', 'fêmea' ,2,'pepa')
console.log(panda);