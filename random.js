// Math.random() devuelve número aleatorio entre 0 y 1
var numero = Math.random();

var str = 'MAYOR';

if(numero<=0.5) {
	str = numero + 'MENOR';
}

console.log('\n' + numero + ' es ' + str + ' que 0,5\n');