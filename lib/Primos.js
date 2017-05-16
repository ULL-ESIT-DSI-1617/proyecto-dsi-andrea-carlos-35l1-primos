"use strict"
var Secuencia = require('../../Secuencia/lib/Secuencia.js');
/**
 * Proyecto: Comparador de secuencias.
 *
 * Esta clase es la clase heredará de Secuencia
 * En esta clase se describe la sucesión de número primos.
 * @param {number} num
 */
class Primos extends Secuencia {
  /**
   * Se le pasa num con el número de elementos de la secuencia que se desea.
   * @constructs [Secuencia]
   * @param {number} num
   *
   */
  constructor(num)
  {
    super(num);
    this.constructor = Primos;
    this.num = num;
    //this.getSecuencia();

  }
  /**
   * Con este método se definirán los elementos de la secuencia
   * @return {String}
   */
  secuencia()
  {
    var i = 1;
    while(this.len < this.num)
    {
      //console.log(this.len);
      //console.log(num);
      this.esPrimo(i);
      i++;
    }
    for(i = 0; i < this.len; i++)
    {
      if(i == 0) this.text = this.text + this.sec[i];
      else this.text = this.text+ ', ' + this.sec[i];
    }
    return this.text;
  }

  /**
   * Este método detectará que números son primos
   * @param {number} num
   */
  esPrimo(num)
  {
    var a = 0;
    var i = 0;
    for(i=1; i<num ;i++)
    {
      if((num%i)==0)
      {
        a++;
      }
    }
    if(a < 2)
    {
      this.sec[this.len] = num;
      this.len++;
    }
  }
  /**
   * Devuelve un array con todos los elementos de la secuencia.
   *
   * @return {String}
   */
  getVals()
  {
    var i = 1;
    while(this.len < this.num)
    {
      //console.log(this.len);
      //console.log(num);
      this.esPrimo(i);
      i++;
    }
    return this.sec;
  }

}

Secuencia.type.Primos = Primos;
module.exports = Primos;
