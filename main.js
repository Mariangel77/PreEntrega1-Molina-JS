alert("AVISO: LAS 12 CUOTAS TIENEN UN INTERÉS DEL 10% Y LAS COMPRAS DE UN SOLO PAGO TIENEN UN DESCUENTO DEL 10%")

let cuotas = parseInt (prompt ("ingresa el numero de cuotas que vas a hacer"))
let preciofinal = parseFloat (prompt("ingresa el precio final"))


if (cuotas ==3 || cuotas ==6){
    resultado = preciofinal/cuotas
    alert("tus cuotas a pagar por mes son " + resultado)

}else if ( cuotas == 12){
    resultado2 = (preciofinal*1.10) / 12
    alert("Te hemos recargado un 10%, asi quedan tus cuotas " + resultado2)

}else if( cuotas == 1){
    resultado3 = preciofinal/1.10
    alert("Te hemos descontado un 10%, asi quedan tus cuotas " + resultado3)

}else{
    alert("lo siento, solo puedes hacer cuotas de 1, 3, 6 o 12")
}



