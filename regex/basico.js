let re1 = new RegExp("abc");//FORMA DE EXPRESAR EXPRESION REGULAR
let re2 = /[0-9]/;//FORMA DE EXPRESAR EXPRESION REGULAR

result = re1.test("abc");//TRUE
console.log(result);
result = re2.test("ANIVERSARIO EN 1985");
console.log(result);//TRUE


let r3 = /\d+[-|/]\d+[-|/]\d+/;//SE DEFINE [-|/] PARA QUE EL GUION Y DIAGONAL SEAN ACEPTADOS
console.log(r3.test("13/07/1991"));//TRUE
console.log(r3.test("18-03-1999"));//TRUE

let r4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let r5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

var r6 = /[aeiou]/;//ENTRE BRACKETS,TOMA CADA ELEMENTO POR SEPARADO. CON BRACKETS, LO TOMA COMO UNA CADENA
console.log(r6.test("start"));//TRUE

let mensaje = "ingeniero";
let newmensaje1 = mensaje.replace(/[aeiou]/g,"*");
let newmensaje2 = mensaje.replace(/[^aeiou]/g,"*");//^ REPRESENTA NEGACION. LA g REPRESENTA REEMPLAZO EN TODA POSICION
let newmensaje3 = mensaje.replace(/[^aeiou]$/g,"*");//$ REPRESENTA TOMAR LA UTLIMA LETRA PARA SUSTITUIRLA
console.log(newmensaje1);
console.log(newmensaje2);
console.log(newmensaje3);

let mensaje4 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de la tecnologia";
let newMensaje4 = mensaje4.replace(/[0-9]{2,4}/g,"0");
console.log(newMensaje4); 

let mensaje5 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de la tecnologia";
let newMensaje5 = mensaje5.replace(/[a-z]{5,10}/g," ");
console.log(newMensaje5);