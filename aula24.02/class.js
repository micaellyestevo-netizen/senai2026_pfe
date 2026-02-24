class Veiculo{
    //atributos ou caracteristicas
    modelo = 'SUV';
    marca = 'Honda - HRV';
    ano = 2025;

    //metodos ou acões
    dirigir(){
        console.log('começou a se mover');
    }
    break(){
        console.log('Parei a bagaça');
    }
}

//instanciar ou criar objeto
const carro = new Veiculo();
carro.dirigir();
carro.break();