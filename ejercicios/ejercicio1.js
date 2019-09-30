//TODAS LAS PALABRAS QUE TENGAN UNA LONGITUD DE 7 O MAS LETRAS
let mensaje = "ANOCHE EL CAMPESINO SE FUE A MONTERREY";
let newMensaje = mensaje.replace(/[A-Z]{7,}/g," ");
console.log("Ejercicio 1");
console.log(newMensaje);

//EXPRESIONES QUE NO FINALICEN CON UNA VOCAL
let mensaje2 = "jugador";
let newMensaje2 = mensaje2.replace(/[^aeiou]$/g, "+");
console.log("Ejercicio 2");
console.log(newMensaje2);

//PALABRAS QUE INICIEN CON M DONDE LA SEGUNDA LETRA NO SEA VOCAL
console.log("Ejercicio 3");
let mensaje32 = /M[^AaEeIOU]/;
console.log(mensaje32.test("Mbappe"));

//EXPRESIONES ENCERRADAS EN COMILLAS
console.log("Ejercicio 4");
let comi = /["]/;
console.log(comi.test("Habra alguna comilla \"dfff\" dentro este ejercicio?"));

//IP'S
let mensaje4 = /(\s{1})(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/;
console.log("Ejercicio 5");
console.log(mensaje4.test("La direccion IP del router es 192.168.1.2"));

//HORAS
let hora = /(\s{1})(\d{1})[:](\d{2})/;
console.log("Ejercicio 6");
console.log(hora.test("Son las 8:30 pm"));

//TELEFONOS
let tel = /((\s{1})\d{3})[-](\d{3})[-](\d{4})/;
console.log("Ejercicio 7");
console.log(tel.test("El numero del muchacho es 985-123-4567"));

//CORREOS ELECTRONICOS
console.log("Ejercicio 8");
let correo = /[a-z0-9][@][a-z][a-z]/;
console.log(correo.test("este seria el correo elctronico jo12rge@gmail.com "));

//URL'S
let url1 = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log("Ejercicio 9");
console.log(url1.test("https://www.google.com"));

//CODIGO POSTAL
let postal = /(\s{1})(\d{5})(\s{1})/;
console.log("Ejercicio 10");
console.log(postal.test("El codigo postal es 47877 "));