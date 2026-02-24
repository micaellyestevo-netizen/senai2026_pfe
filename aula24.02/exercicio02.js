class Cidade{
    qtdeHabitantes='200.000'
    estado='São Paulo'
    nome='Araçatuba'

    mostrar(){
        console.log('A cidade de ' + this.nome + ' fica no estado de ' + this.estado + ' tem cerca de ' + this.qtdeHabitantes + ' habitantes');
    }
}

const city = new Cidade();
city.mostrar();
