class Billete
{
    constructor( v, c)
    {
        this.valor = v; //esta es la construcion de mi clase billete
        this.cantidad = c;
    }
}

function entregarDinero()//esta es la funcion que se disparara al dar click al boton 
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);//esto se usa para parciar a un numero entoro "parseint" 
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor); //math.floor es para redondiar haciaabajo  numeros desimales
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles)); //esta parte sirve o guarda todos los billetes
            dinero = dinero -(bi.valor * papeles);//bi = billetes + es valor total * papeles
        }
    }
    
    if(dinero > 0)
    {
        resultado.innerHTML = "saldo insuficiente";//innerhtml es un atributo
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
        {
            resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
                }
            }
        }
    }

var caja = [];
var entregado = [];
caja.push(new Billete(500, 10) );
caja.push(new Billete(100, 30) ); //cantidad de billetes en mi cajero  
caja.push(new Billete(50, 80) ); //cantidad de billetes en mi cajero 
caja.push(new Billete(20, 10) ); //cantidad de billetes en mi cajero 
var dinero = 0; //es el saldo quieren retirar 
var div = 0;
var papeles = 0;


var resultado = document.getElementById("resultado")
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);