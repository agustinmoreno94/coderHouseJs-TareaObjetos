class ethereum{

    constructor(montoEth, valorEthADolar, dolarBlue){
    this.montoEth = montoEth;
    this.valorEthADolar = valorEthADolar;
    this.dolarBlue = dolarBlue;
}

    getValorMonto(){
        return this.valorEthADolar = this.valorEthADolar*this.montoEth;
    }

    getValorEnPesos(){
        return this.dolarBlue = this.dolarBlue*this.valorEthADolar;
    }

}

let montoEthInput = parseFloat(prompt("ingresa tu saldo de eth"))
let valorEthADolarInput  = parseInt(prompt("Ingrese precio actual de eth"))
let dolarBlueInput = parseInt(prompt("Ingrese dolar blue"))

let consulta = new ethereum(montoEthInput, valorEthADolarInput, dolarBlueInput);

console.log("tus "+consulta.montoEth+" valen en dolares: "+consulta.getValorMonto()+" y en pesos: "+consulta.getValorEnPesos())   