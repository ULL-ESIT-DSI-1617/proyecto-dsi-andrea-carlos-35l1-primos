var Primos = require("../lib/Primos.js");
var should = require("should")

describe("Función comparar", function(){
  it("No existen secuencias declaradas", function() {
    var mySecuencia = new Primos(5);
    var result = mySecuencia.getSecuencia();
    result.should.be.equal("1, 2, 3, 5, 7");
  })
  it("No existen operaciones declaradas", function() {
    var mySecuencia = new Primos(5);
    var prueba = new Primos(5);
    var result = mySecuencia.operar(prueba, "Igual")
    result.should.be.equal("Operación no definida");
  })

})
