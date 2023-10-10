var minhaVar = 'minha variavel'; //declaração em JavaScript.
function minhaFunc(x, y) {
    return x + y;
}
// ecmascript javascript
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
// a função acima foi simplificada com o uso de arrow function.
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sdfsdf';
n1 = 4;
