//DEFINICION TRADICIONAL
function square(x){
    return x*x;
}

//DEFINICION A TRAVES DE UNA VARIABLE
const power = function(base, exponente){
    let result = 1;
    for(let count = 0; count < exponente; count++){
        result *= base;
    }
    return result;
}

//FUNCION ARROW
const hipotenusa = (a,b) => {
    let result = Math.sqrt(a*a + b*b);
    return result;
}

//FUNCION ARROW
const hola = () => {
    return "Hola a todos desde el ITSVA";
}

console.log(square(8));
console.log(power(2,4));
console.log(hipotenusa(3,4));
console.log(hola());