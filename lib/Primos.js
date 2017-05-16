"use strict"
var Secuencia = require('../../Secuencia/lib/Secuencia.js');

class Primos extends Secuencia {
  constructor(num)
  {
    super(num);
    this.constructor = Primos;
    this.num = num;
    //this.getSecuencia();

  }

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
